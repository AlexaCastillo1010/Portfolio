import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar'
import MainContent from './components/maincontent'
import Projects from './components/projects'
import AboutSkills from './components/aboutskills'
import Contact from './components/contact'

export default function App() {
  return (
    <div className="mx-auto max-w-[1437.65px] p-5 shadow-2xl ">
      <NavBar />
      <MainContent />
      <Projects />
      <AboutSkills />
      <Contact />
    </div>
    
  )
}
