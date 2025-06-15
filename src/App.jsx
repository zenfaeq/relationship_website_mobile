import React from 'react'
import { HashRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import {Closing, Letter,Passcode,Question,Recap,Timer,Message,Music,Picture} from './components'
import './index.css'

function Landing() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-8">Welcome to Our Story</h1>
        <button
          onClick={() => navigate('/passcode')}
          className="px-8 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-lg border border-white/50 rounded-lg transition-colors"
        >
          Start Journey
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/passcode" element={<Passcode />} />
        <Route path="/question" element={<Question />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/recap" element={<Recap />} />
        <Route path="/recap/message" element={<Message />} />
        <Route path="/recap/music" element={<Music />} />
        <Route path="/recap/pictures" element={<Picture />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/closing" element={<Closing />} />
      </Routes>
    </Router>
  )
}

export default App
