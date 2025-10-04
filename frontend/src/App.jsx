import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import About from './Pages/About'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import SignIn from './Pages/SignIn'
import Login from './Pages/Login'

const App = () => {
  return (
    <div>
      {/* Navbar is common to all pages */}
      <Navbar />

      {/* Routes define what changes based on URL */}
      <Routes>
        <Route path="/" element={<Home/>} />   
        <Route path="/about" element={<About />} />    
        <Route path='/shop' element={<Shop/>} /> 
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
