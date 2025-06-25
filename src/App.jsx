import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import FeaturedCollection from './components/FeaturedCollection'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <FeaturedCollection />
    </>
  )
}

export default App
