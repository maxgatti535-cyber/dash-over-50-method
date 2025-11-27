import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('dashboard')

  return (
    <div className="bg-creamBg min-h-screen flex flex-col">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      
      <main className="flex-grow p-4">
        {currentPage === 'dashboard' && <Dashboard />}
      </main>
      
      <Footer onNavigate={setCurrentPage} />
    </div>
  )
}

export default App
