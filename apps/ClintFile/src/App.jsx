import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import { Navigate, Routes, Route } from "react-router-dom";
import Dashbord from './component/dashboard/Dashbord'
import Navebar from './component/navebar/Navebar'
import Analytics from './component/Analytics/Analytics'
import Setting from './component/Setting/Setting'

function App() {
 
  return (
    <>
   
   <Routes>
    <Route path='/*' element={<Navigate to="/RegisterPage" />}/>
    <Route path='RegisterPage' element={<RegisterPage/>}/>
    <Route path='LoginPage' element={<LoginPage/>}/>
    <Route path='Navebar' element={<Navebar/>}/>
    <Route path='Dashbord' element={<Dashbord/>}/>
    <Route path='Analytics' element={<Analytics/>}/>
    <Route path='Setting' element={<Setting/>}/>
   </Routes>
    </>
  )
}

export default App
