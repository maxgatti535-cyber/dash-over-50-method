import React, { useState, useEffect } from 'react'
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
import WelcomeScreen from './components/WelcomeScreen'
import ProfileSetupScreen from './components/ProfileSetupScreen'
import AIChat from './components/AIChat' // Importa AIChat

// Definisci tutti gli schermi possibili
type Screen = 
  | 'welcome' 
  | 'profile-setup' 
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
  | 'ai-coach' // Aggiungi AI Coach

// Mappa i titoli per l'Header
const titles: Record<Screen, string> = {
  welcome: 'Benvenuto',
  'profile-setup': 'Setup Profilo',
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
  'ai-coach': 'AI Coach',
}

const App: React.FC = () => {
  // Stato per la schermata corrente
  const [screen, setScreen] = useState<Screen>('welcome') // Inizia sempre da 'welcome'

  // Stato per il completamento del profilo
  const [isProfileComplete, setIsProfileComplete] = useState(false)

  // Effetto per controllare lo stato del profilo all'avvio
  useEffect(() => {
    const profileName = localStorage.getItem('profile.name')
    if (profileName) { // Se il nome del profilo esiste, consideriamo il profilo completo
      setIsProfileComplete(true)
      setScreen('home') // Vai alla home se il profilo è completo
    } else {
      setScreen('welcome') // Altrimenti, inizia dalla schermata di benvenuto
    }
  }, [])

  // Funzione per navigare all'AI Coach con un prompt specifico
  const onNavigateToCoach = (prompt: string) => {
    setScreen('ai-coach')
    // Qui potresti passare il prompt all'AIChat se fosse un componente più complesso
    // Per ora, AIChat gestisce il suo stato interno
  }

  // Funzione per renderizzare la schermata corrente
  const renderScreen = () => {
    if (!isProfileComplete) {
      // Se il profilo non è completo, mostra Welcome o ProfileSetup
      if (screen === 'welcome') {
        return <WelcomeScreen onComplete={() => setScreen('profile-setup')} />
      }
      if (screen === 'profile-setup') {
        return <ProfileSetupScreen onComplete={() => {
          setIsProfileComplete(true)
          setScreen('home')
        }} />
      }
      // Fallback se per qualche motivo lo screen è diverso ma il profilo non è completo
      return <WelcomeScreen onComplete={() => setScreen('profile-setup')} />
    }

    // Se il profilo è completo, naviga tra le pagine normali
    switch (screen) {
      case 'dashboard': return <Dashboard setScreen={setScreen as any} />
      case 'bp': return <BloodPressure />
      case 'education': return <Education onNavigateToCoach={onNavigateToCoach} />
      case 'exercise': return <Exercise />
      case 'meals': return <Meals onNavigateToCoach={onNavigateToCoach} />
      case 'meds': return <Medications />
      case 'progress': return <Progress />
      case 'settings': return <Settings />
      case 'reminders': return <Reminders />
      case 'privacy': return <PrivacyPolicy />
      case 'terms': return <TermsOfService />
      case 'ai-coach': return <AIChat /> // Renderizza AIChat
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
              <button onClick={() => setScreen('ai-coach')} className="block w-full underline text-brandPrimary">🤖 AI Coach</button> {/* Pulsante AI Coach */}
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
      {/* Header visibile solo se non siamo in Welcome/ProfileSetup */}
      {screen !== 'welcome' && screen !== 'profile-setup' && (
        <Header screen={screen} setScreen={setScreen} title={titles[screen]} />
      )}
      
      <main className="flex-grow px-4 pt-4 pb-20">
        {renderScreen()}
      </main>
      
      {/* Footer visibile solo se non siamo in Welcome/ProfileSetup */}
      {screen !== 'welcome' && screen !== 'profile-setup' && (
        <Footer setScreen={setScreen as any} />
      )}
    </div>
  )
}

export default App
