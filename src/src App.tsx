import React, { useState, useEffect } from 'react'

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
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

  return (
    <main className="min-h-screen bg-creamBg">
      <div className="max-w-md mx-auto p-4">
        <h1 className="text-3xl font-bold text-brandPrimary mb-4">DASH Over 50 METHOD™</h1>
        <p className="text-textSecondary mb-6">Benvenuto! Questa è la base del tuo nuovo progetto.</p>
        
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-brandPrimary">
          <h2 className="text-xl font-semibold text-brandPrimary mb-2">✅ Setup Completato!</h2>
          <p className="text-textMuted text-sm">
            La struttura Vite + React + Tailwind CSS è pronta.
          </p>
        </div>
      </div>
    </main>
  )
}

export default App
