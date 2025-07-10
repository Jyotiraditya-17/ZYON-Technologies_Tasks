import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProtectedRoute from './auth/ProtectedRoute'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'

const App = ( {setThemeMode} ) => {
  return (
    <div>
      <Navbar setThemeMode={setThemeMode} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App
