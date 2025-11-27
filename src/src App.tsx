import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'
import BloodPressure from './components/BloodPressure'
import Education from './components/Education'
import Exercise from './components/Exercise'
import Meals from './components/Meals'
import Medications from './components/Medications'
import Progress from './components/Progress'
import Settings from './components/Settings'
import Reminders from './components/Reminders'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'

type Screen =
  | 'home'
  | 'dashboard'
  | 'bp'
  | 'education'
  | 'exercise'
  | 'meals'
  | 'meds'
  | 'progress'
  | 'settings'
  | 'reminders'
  | 'privacy'
  | 'terms'

const App: React.FC = () => {
  const [screen, setScreen] = useState<Screen>('home')

  const screenTitle: Record<Screen, string> = {
    home: 'DASH Over 50 METHOD™',
    dashboard: 'Dashboard',
    bp: 'Blood Pressure',
    education: 'Education',
    exercise: 'Exercises',
    meals: 'Meals',
    meds: 'Medications',
    progress: 'Progress',
    settings: 'Settings',
    reminders: 'Reminders',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
  }

  const onNavigateToCoach = (prompt: string) => {
    // Per ora niente AI reale: solo messaggio
    alert('AI Coach (mock): ' + prompt)
  }

  const renderScreen = () => {
    switch (screen) {
      case 'dashboard':
        // Dashboard accetta setScreen (dal tuo componente)
        return <Dashboard setScreen={(s: any) => setScreen(s)} />
      case 'bp':
        return <BloodPressure />
      case 'education':
        return <Education onNavigateToCoach={onNavigateToCoach} />
      case 'exercise':
        return <Exercise />
      case 'meals':
        return <Meals onNavigateToCoach={onNavigateToCoach} />
      case 'meds':
        return <Medications />
      case 'progress':
        return <Progress />
      case 'reminders':
        return <Reminders />
      case 'settings':
        return <Settings />
      case 'privacy':
        return <PrivacyPolicy />
      case 'terms':
        return <TermsOfService />
      case 'home':
      default:
        return (
          <div className="space-y-3 text-center">
            <h1 className="text-3xl font-bold text-brandPrimary mb-2">DASH Over 50 METHOD™</h1>
            <p className="text-textSecondary mb-4">Seleziona una sezione:</p>

            <div className="grid grid-cols-2 gap-3 text-left">
              <button onClick={() => setScreen('dashboard')} className="bg-surface p-4 rounded-lg border hover:bg-brandPrimaryTint">📊 Dashboard</button>
              <button onClick={() => setScreen('bp')} className="bg-surface p-4 rounded-lg border hover:bg-brandPrimaryTint">❤️ Blood Pressure</button>
              <button onClick={() => setScreen('education')} className="bg-surface p-4 rounded-lg border hover:bg-brandPrimaryTint">📚 Education</button>
              <button onClick={() => setScreen('exercise')} className="bg-surface p-4 rounded-lg border hover:bg-brandPrimaryTint">🏃 Exercises</button>
              <button onClick={() => setScreen('meals')} className="bg-surface p-4 rounded-lg border hover:bg-brandPrimaryTint">🍽️ Meals</button>
              <button onClick={() => setScreen('meds')} className="bg-surface p-4 rounded-lg border hover:bg-brandPrimaryTint">💊 Medications</button>
              <button onClick={() => setScreen('reminders')} className="bg-surface p-4 rounded-lg border hover:bg-brandPrimaryTint">🔔 Reminders</button>
              <button onClick={() => setScreen('progress')} className="bg-surface p-4 rounded-lg border hover:bg-brandPrimaryTint">📈 Progress</button>
            </div>

            <div className="pt-2">
              <button onClick={() => setScreen('settings')} className="underline text-brandPrimary">⚙️ Settings</button>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="bg-creamBg max-w-[430px] mx-auto min-h-screen flex flex-col font-sans text-textPrimary leading-relaxed">
      {/* Header del tuo progetto richiede: screen, setScreen, title */}
      <Header screen={screen} setScreen={setScreen} title={screenTitle[screen]} />

      <main className="flex-grow px-4 pt-4 pb-20">
        {renderScreen()}
      </main>

      {/* Footer del tuo progetto richiede: setScreen */}
      <Footer setScreen={(s) => setScreen(s as Screen)} />
    </div>
  )
}

export default App
