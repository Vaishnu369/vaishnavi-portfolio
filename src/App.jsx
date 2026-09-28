import { useState } from 'react'
import Navbar from './components/Navbar'
import "./App.css"
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}

export default App
