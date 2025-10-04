import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import About from './Pages/About'
import Home from './Pages/Home'
import Shop from './Pages/Shop'

const App = () => {
  return (
    <div>
      {/* Navbar is common to all pages */}
      <Navbar />

      {/* Routes define what changes based on URL */}
      <Routes>
        <Route path="/Home" element={<Home/>} />   
        <Route path="/about" element={<About />} />    
        <Route path='/shop' element={<Shop/>} /> 
      </Routes>
    </div>
  )
}

export default App
