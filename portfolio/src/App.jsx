import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar'
import MainContent from './components/maincontent'
import Projects from './components/projects'
import AboutSkills from './components/aboutskills'

export default function App() {
  return (
    <div className="mx-auto max-w-[1437.65px]">
      <NavBar />
      <MainContent />
      <Projects />
      <AboutSkills />
    </div>
    
  )
}
