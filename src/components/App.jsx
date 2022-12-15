import { useState } from 'react'


// Components
import Navbar from "../components/Navbar"
import Home from "../components/Home"
import '../css/styles.css'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  )
}

export default App
