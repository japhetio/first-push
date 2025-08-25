import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Hero from "./Hero"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from  './Footer.jsx'

import Contact from './Contact.jsx'

import Profile from './Profile.jsx'
import About from './About.jsx'

import Polifolio from './Polifolio.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <BrowserRouter>
        <Navbar/>
         
      
      
      
      <Routes>
        <Route path="/Home" element={<Hero />}/>
    
        <Route path="/Polifolio" element={<div><Polifolio /></div>}/>
        <Route path="/ABOUT" element={<div><About /></div>}/>
        <Route path="/profile" element={<div><Profile /></div>}/>
        <Route path="/contact" element={<div><Contact /></div>}/>
     </Routes>
        <Footer/> 
    </BrowserRouter>
  )
}

export default App
