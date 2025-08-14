import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login, Campaigns } from './AllFiles';
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' index element={<Login />} />
          <Route path='/campaigns' element={<Campaigns />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
