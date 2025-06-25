import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import FeaturedCollection from './components/FeaturedCollection'
import PreOrder from './components/PreOrder'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <FeaturedCollection />
      <PreOrder />
    </>
  )
}

export default App
