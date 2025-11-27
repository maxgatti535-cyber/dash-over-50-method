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
import ProfileSetupScreen from './components/ProfileSetupScreen'
import WelcomeScreen from './components/WelcomeScreen'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'

type PageType = 
  | 'dashboard' 
  | 'blood-pressure' 
  | 'education' 
  | 'exercise' 
  | 'meals' 
  | 'medications' 
  | 'progress' 
  | 'settings' 
  | 'reminders'
  | 'welcome'
  | 'profile-setup'
  | 'privacy'
  | 'terms'

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState<PageType>('dashboard')
  const [isProfileComplete, setIsProfileComplete] = useState(false)

  useEffect(() => {
    // Controlla se il profilo è completato
    const profile = localStorage.getItem('userProfile')
    if (profile) {
      setIsProfileComplete(true)
    }
    
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <main className="flex items-center justify-center h-screen bg-creamBg">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-brandPrimary border-t-transparent mx-auto mb-4"></div>
          <h1 className="text-2xl font-bold text-brandPrimary">DASH Over 50 METHOD™</h1>
        </div>
      </main>
    )
  }

  // Se il profilo non è completato, mostra la schermata di benvenuto
  if (!isProfileComplete) {
    return (
      <WelcomeScreen onComplete={() => setIsProfileComplete(true)} />
    )
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />
      case 'blood-pressure':
        return <BloodPressure />
      case 'education':
        return <Education />
      case 'exercise':
        return <Exercise />
      case 'meals':
        return <Meals />
      case 'medications':
        return <Medications />
      case 'progress':
        return <Progress />
      case 'settings':
        return <Settings onNavigate={setCurrentPage} />
      case 'reminders':
        return <Reminders />
      case 'privacy':
        return <PrivacyPolicy />
      case 'terms':
        return <TermsOfService />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="flex flex-col h-screen bg-creamBg">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      
      <main className="flex-grow overflow-y-auto">
        <div className="max-w-6xl mx-auto p-4">
          {renderPage()}
        </div>
      </main>
      
      <Footer onNavigate={setCurrentPage} />
    </div>
  )
}

export default App
