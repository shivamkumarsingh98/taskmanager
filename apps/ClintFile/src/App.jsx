import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import { Navigate, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashbord from './component/dashboard/Dashbord'
import Navebar from './component/navebar/Navebar'

function App() {
 
  return (
    <>
   
   <Routes>
    <Route path='/*' element={<Navigate to="/RegisterPage" />}/>
    <Route path='RegisterPage' element={<RegisterPage/>}/>
    <Route path='LoginPage' element={<LoginPage/>}/>
    <Route path='Navebar' element={<Navebar/>}/>
    <Route path='Dashbord' element={<Dashbord/>}/>
   </Routes>
    </>
  )
}

export default App
