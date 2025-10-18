import React from 'react'
import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Auth from "./pages/Auth"
import Enquire from './pages/Enquire'
import Footer from './pages/Footer'
import Profile from './pages/Profile'
import Notification from "./pages/Notifications"
import About from './pages/About'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/auth' element={<Auth/>}/>
      <Route path='/enquire' element={<Enquire/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/notifications' element={<Notification/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App