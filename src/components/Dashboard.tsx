
import React, { useState, useEffect, useMemo } from 'react';
import { getLocalStorageItem, getBPCategory } from './utils';
import { ChevronRightIcon } from './icons';

// --- Types ---
type Unit = "mg" | "mcg" | "mL" | "tabs" | "drops" | "units";
type Slot = "Morning" | "Noon" | "Evening" | "Bedtime";

interface BPReading {
  systolic: string | number;
  diastolic: string | number;
  date: string;
  time?: string;
}

interface Medication {
  id: string;
  name: string;
  dose: number | '';
  unit: Unit;
  scheduleType: "times" | "slots";
  times?: string[]; // "HH:mm"
  slots?: Slot[];
  slotTimes?: { [key in Slot]?: string };
  repeatDays: number[]; // 0=Sun..6=Sat
  startDateISO: string; // "YYYY-MM-DD"
  endDateISO?: string;
}

interface TakenRecord {
  medId: string;
  time: string;
}

interface TakenRecordsMap {
  [dateKey: string]: TakenRecord[];
}

const SLOT_TIMES: { [key in Slot]: string } = {
  Morning: '08:00',
  Noon: '12:00',
  Evening: '18:00',
  Bedtime: '22:00',
};

const getDailyKey = (date: Date) => date.toISOString().split('T')[0];

const dailyWins = [
  "Use lemon & herbs instead of salt.",
  "Chose a whole grain option today.",
  "Had a piece of fruit as a snack.",
  "Read a food label for sodium.",
  "Took a 10-minute walk.",
  "Drank a glass of water first thing.",
  "Added a vegetable to your dinner."
];

const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
    <path d="M12 9h.01" />
    <path d="M11 12h1v4h1" />
  </svg>
);


const Dashboard: React.FC<{ setScreen: (screen: string) => void }> = ({ setScreen }) => {
  const [waterCount, setWaterCount] = useState<number>(0);
  const [bpData, setBpData] = useState<{ avg: string; category: { text: string, color: string } }>({ avg: 'N/A', category: { text: 'Not enough data', color: 'text-textSecondary' } });
  const [nextMedInfo, setNextMedInfo] = useState<string>('All set for today.');
  const [settingsSummary, setSettingsSummary] = useState({
    units: 'US',
    exerciseLevel: 'Beginner',
    sodiumTarget: '1800'
  });

  const todayKey = getDailyKey(new Date());

  const dailyWin = useMemo(() => {
    const dayOfYear = Math.floor((new Date().getTime() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24);
    return dailyWins[dayOfYear % dailyWins.length];
  }, [todayKey]);

  useEffect(() => {
    // Load water data for today
    setWaterCount(getLocalStorageItem(`water:${todayKey}`, 0));

    // Load and process BP data with explicit typing
    const savedBP = getLocalStorageItem<BPReading[]>('dash_bp_readings', []);
    if (Array.isArray(savedBP) && savedBP.length > 0) {
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

      const recentReadings = savedBP.filter(r =>
        r &&
        typeof r === 'object' &&
        r.date &&
        new Date(r.date) >= sevenDaysAgo
      );

      if (recentReadings.length >= 3) {
        const totalSys = recentReadings.reduce((sum, r) => sum + (Number(r.systolic) || 0), 0);
        const totalDia = recentReadings.reduce((sum, r) => sum + (Number(r.diastolic) || 0), 0);
        const avgSys = Math.round(totalSys / recentReadings.length);
        const avgDia = Math.round(totalDia / recentReadings.length);
        setBpData({
          avg: `${avgSys} / ${avgDia}`,
          category: getBPCategory(avgSys, avgDia)
        });
      }
    }

    // Load medication data and compute next due with explicit typing
    const savedMeds = getLocalStorageItem<Medication[]>('dash_medications_v2', []);
    const savedTaken = getLocalStorageItem<TakenRecordsMap>('dash_medsTaken_v2', {});

    if (Array.isArray(savedMeds) && savedMeds.length > 0) {
      // Safe indexing using the interface
      const todaysTaken = savedTaken[todayKey] || [];

      const now = new Date();
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const todayDay = today.getDay();
      const upcomingInstances: { name: string, time: string, dose: any, unit: any }[] = [];

      savedMeds.forEach(med => {
        const startDate = new Date(med.startDateISO + 'T00:00:00');
        const endDate = med.endDateISO ? new Date(med.endDateISO + 'T23:59:59') : null;
        const isActive = startDate <= today && (!endDate || today <= endDate) && med.repeatDays.includes(todayDay);
        if (!isActive) return;

        let times: string[] = [];
        if (med.scheduleType === 'times' && med.times) times = med.times;
        else if (med.scheduleType === 'slots' && med.slots) times = med.slots.map(slot => (med.slotTimes?.[slot]) || SLOT_TIMES[slot]);

        times.forEach(time => {
          if (!time) return;
          const [hours, minutes] = time.split(':').map(Number);
          const dueTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), hours, minutes);
          const wasTaken = todaysTaken.some(t => t.medId === med.id && t.time === time);

          if (!wasTaken && dueTime >= now) {
            upcomingInstances.push({ name: `${med.name} ${med.dose}${med.unit}`, time, dose: med.dose, unit: med.unit });
          }
        });
      });

      if (upcomingInstances.length > 0) {
        const nextDue = upcomingInstances.sort((a, b) => a.time.localeCompare(b.time))[0];
        setNextMedInfo(`${nextDue.name} at ${nextDue.time}`);
      } else {
        setNextMedInfo('All set for today.');
      }
    } else {
      setNextMedInfo('No medications added yet.');
    }

    // Load settings summary
    const units = getLocalStorageItem('preferences.units', 'us') === 'us' ? 'US' : 'Metric';
    const exLevelRaw = getLocalStorageItem<string>('exLevel', getLocalStorageItem('preferences.exerciseLevelDefault', 'beginner'));
    const exerciseLevel = exLevelRaw ? exLevelRaw.charAt(0).toUpperCase() + exLevelRaw.slice(1) : 'Beginner';
    const sodiumTarget = getLocalStorageItem('preferences.sodiumTargetMg', 1800);

    setSettingsSummary({
      units,
      exerciseLevel,
      sodiumTarget: String(sodiumTarget)
    });

  }, [todayKey]);

  const updateWater = (newCount: number) => {
    const count = Math.max(0, newCount);
    setWaterCount(count);
    localStorage.setItem(`water:${todayKey}`, JSON.stringify(count));
  };

  return (
    <div className="space-y-6 pb-6">
      {/* Water Card */}
      <div className="glass-panel p-6 rounded-3xl premium-shadow message-appear">
        <h2 className="font-bold text-xl text-textPrimary mb-1">Water Tracker</h2>
        <p className="text-sm text-textSecondary opacity-80 mb-6">Hydration is key for DASH success.</p>

        <div className="flex items-center justify-between bg-white/40 p-4 rounded-2xl border border-white/50 shadow-inner">
          <button
            onClick={() => updateWater(waterCount - 1)}
            className="bg-white text-brandPrimary rounded-xl h-12 w-12 flex items-center justify-center text-2xl font-bold shadow-sm hover:bg-brandPrimaryTint active:scale-90 transition-all"
            aria-label="Decrease water"
          >-</button>

          <div className="flex flex-col items-center">
            <span className="text-5xl font-black text-brandPrimary drop-shadow-sm">{waterCount}</span>
            <span className="text-xs font-bold uppercase tracking-widest text-brandPrimary/60 mt-1">Glasses</span>
          </div>

          <button
            onClick={() => updateWater(waterCount + 1)}
            className="bg-brandPrimary text-white rounded-xl h-12 w-12 flex items-center justify-center text-2xl font-bold shadow-md hover:bg-brandPrimaryDark active:scale-90 transition-all"
            aria-label="Increase water"
          >+</button>
        </div>
        <p className="mt-4 text-center text-xs text-textSecondary italic">Goal: ~8 glasses per day.</p>
      </div>

      {/* BP Card */}
      <div className="glass-panel p-6 rounded-3xl premium-shadow message-appear" style={{ animationDelay: '100ms' }}>
        <h2 className="font-bold text-xl text-textPrimary mb-4">Weekly Average BP</h2>
        {bpData.avg === 'N/A' ? (
          <div className="bg-brandPrimaryTint/30 p-4 rounded-2xl border border-dashed border-brandPrimary/20 text-center">
            <p className="text-textSecondary text-base">Record 3 readings to see your weekly trend.</p>
          </div>
        ) : (
          <div className="text-center py-2">
            <p className="text-5xl font-black gradient-text tracking-tighter mb-1">{bpData.avg}</p>
            <div className={`inline-block px-4 py-1 rounded-full text-sm font-bold shadow-sm ${bpData.category.color.replace('text-', 'bg-').replace('-600', '-100')} ${bpData.category.color}`}>
              {bpData.category.text}
            </div>
            <p className="text-[11px] text-textMuted mt-4 opacity-70 italic">Consult your doctor for a professional diagnosis.</p>
          </div>
        )}
      </div>

      {/* Medication Card */}
      <div className="glass-panel p-6 rounded-3xl premium-shadow message-appear flex items-center gap-4" style={{ animationDelay: '200ms' }}>
        <div className="h-14 w-14 bg-gradient-to-tr from-brandPrimary to-brandPrimaryDark rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <h2 className="font-bold text-sm uppercase tracking-wider text-textSecondary opacity-70">Next Medication</h2>
          <p className="text-lg font-bold text-textPrimary">{nextMedInfo}</p>
        </div>
      </div>

      {/* Daily Win Card */}
      <div className="bg-gradient-to-br from-brandPrimaryDark to-teal-900 text-white p-6 rounded-3xl premium-shadow message-appear relative overflow-hidden" style={{ animationDelay: '300ms' }}>
        <div className="absolute -right-4 -bottom-4 opacity-10">
          <InfoIcon />
        </div>
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
            <InfoIcon />
          </div>
          <h2 className="font-bold text-xl">Tiny DASH Win</h2>
        </div>
        <p className="text-white/90 text-lg leading-relaxed font-medium">"{dailyWin}"</p>
      </div>

      {/* Settings Summary */}
      <div className="flex justify-center gap-4 py-2 opacity-60">
        <div className="text-[11px] font-bold uppercase tracking-widest bg-white/50 px-2 py-1 rounded border border-white/50">Units: {settingsSummary.units}</div>
        <div className="text-[11px] font-bold uppercase tracking-widest bg-white/50 px-2 py-1 rounded border border-white/50">Level: {settingsSummary.exerciseLevel}</div>
        <div className="text-[11px] font-bold uppercase tracking-widest bg-white/50 px-2 py-1 rounded border border-white/50">Salt: {settingsSummary.sodiumTarget}mg</div>
      </div>

      <button
        onClick={() => setScreen('bp')}
        className="w-full text-lg bg-gradient-to-r from-brandPrimary to-brandAccent text-white font-black py-4 px-4 rounded-2xl transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-95 transform flex items-center justify-center gap-2"
      >
        <span>LOG BP READING</span>
        <ChevronRightIcon />
      </button>
    </div>
  );
};

export default Dashboard;
