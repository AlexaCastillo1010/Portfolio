import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar'
import MainContent from './components/maincontent'
import Projects from './components/projects'
import AboutSkills from './components/aboutskills'
import Contact from './components/contact'
import Techstack from './components/techstack'

export default function App() {
  return (
    <div className="mx-auto max-w-[1437.65px] p-5 shadow-2xl ">
      <NavBar />
      <MainContent />
      <Projects />
      <Techstack />
      <AboutSkills />
      <Contact />
    </div>
    
  )
}
