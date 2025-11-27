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

type Screen = 'home' | 'dashboard' | 'bp' | 'education' | 'exercise' | 'meals' | 'meds' | 'progress' | 'settings' | 'reminders' | 'privacy' | 'terms'

const titles: Record<Screen, string> = {
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

const App: React.FC = () => {
  const [screen, setScreen] = useState<Screen>('home')

  const render = () => {
    switch (screen) {
      case 'dashboard': return <Dashboard setScreen={setScreen as any} />
      case 'bp': return <BloodPressure />
      case 'education': return <Education onNavigateToCoach={() => {}} />
      case 'exercise': return <Exercise />
      case 'meals': return <Meals onNavigateToCoach={() => {}} />
      case 'meds': return <Medications />
      case 'progress': return <Progress />
      case 'settings': return <Settings />
      case 'reminders': return <Reminders />
      case 'privacy': return <PrivacyPolicy />
      case 'terms': return <TermsOfService />
      case 'home':
      default:
        return (
          <div className="space-y-3 text-center">
            <h1 className="text-3xl font-bold text-brandPrimary mb-2">DASH Over 50 METHOD™</h1>
            <p className="text-textSecondary mb-4">Seleziona una sezione:</p>
            <div className="grid grid-cols-2 gap-3 text-left">
              <button className="bg-surface p-4 rounded-lg border hover:bg-brandPrimaryTint" onClick={() => setScreen('dashboard')}>📊 Dashboard</button>
              <button className="bg-surface p-4 rounded-lg border hover:bg-brandPrimaryTint" onClick={() => setScreen('bp')}>❤️ BP</button>
              <button className="bg-surface p-4 rounded-lg border hover:bg-brandPrimaryTint" onClick={() => setScreen('education')}>📚 Education</button>
              <button className="bg-surface p-4 rounded-lg border hover:bg-brandPrimaryTint" onClick={() => setScreen('exercise')}>🏃 Exercise</button>
              <button className="bg-surface p-4 rounded-lg border hover:bg-brandPrimaryTint" onClick={() => setScreen('meals')}>🍽️ Meals</button>
              <button className="bg-surface p-4 rounded-lg border hover:bg-brandPrimaryTint" onClick={() => setScreen('meds')}>💊 Meds</button>
              <button className="bg-surface p-4 rounded-lg border hover:bg-brandPrimaryTint" onClick={() => setScreen('reminders')}>🔔 Reminders</button>
              <button className="bg-surface p-4 rounded-lg border hover:bg-brandPrimaryTint" onClick={() => setScreen('progress')}>📈 Progress</button>
            </div>
            <div className="pt-2 space-y-1">
              <button onClick={() => setScreen('settings')} className="block w-full underline text-brandPrimary">⚙️ Settings</button>
              <button onClick={() => setScreen('privacy')} className="block w-full underline text-sm text-textSecondary">Privacy</button>
              <button onClick={() => setScreen('terms')} className="block w-full underline text-sm text-textSecondary">Terms</button>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="bg-creamBg max-w-[430px] mx-auto min-h-screen flex flex-col font-sans text-textPrimary leading-relaxed">
      <Header screen={screen} setScreen={setScreen} title={titles[screen]} />
      <main className="flex-grow px-4 pt-4 pb-20">{render()}</main>
      <Footer setScreen={setScreen as any} />
    </div>
  )
}

export default App
