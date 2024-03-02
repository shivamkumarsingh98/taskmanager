import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './component/register/Register'
import Login from './component/login/Login'
import { Navigate, Routes, Route } from "react-router-dom";
import Dashbord from './component/dashboard/Dashbord'
import Navebar from './component/navebar/Navebar'
import Analytics from './component/Analytics/Analytics'
import Setting from './component/Setting/Setting'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './Context/AuthProvider';
import ProtectedRoute from './Context/ProtectedRoute';




function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        
        {/* Private Routes */}
        <Route
          element={
            <ProtectedRoute >
              <Dashbord/>
            </ProtectedRoute >
          }
        />
        <Route
          element={
            <ProtectedRoute element={<Navebar />} />
          }
        />
        <Route
          element={
            <ProtectedRoute element={<Analytics />} />
          }
        />
        <Route
          element={
            <ProtectedRoute element={<Setting />} />
          }
        />
        
        {/* Default Redirect for unknown paths */}
        <Route path="/*" element={<Navigate to="/Register" />} />
      </Routes>
    </AuthProvider>
  )
}
export default App;