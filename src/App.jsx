import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LandingPage from './LandingPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from './components/NotFound';
import Aerospace from './Aerospace';
import Transportation from './Transportation';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/transportation" element={<Transportation />} />
        <Route path="/aerospace" element={<Aerospace />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </Router>

  )
}

export default App
