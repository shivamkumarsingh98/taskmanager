import React from 'react'
import { useState } from 'react'
import style from './Register.module.css'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { register } from '../../Api/auth/auth'
import { toast } from 'react-toastify';

function Register() {
let navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const notify = (message) => toast.error(message);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      console.log("Passwords do not match");
      return;
    }
    try {
      await register(formData.name, formData.email, formData.password, formData.confirmPassword);
      navigate('/Dashboard')
    } catch (error) {
      console.log("Registration failed:", error);
      return
    }


  }

  return (
    <div className={style.body}>
      <div className={style.imagesection}>
        <img src='./images/Astro.png' alt='image' className={style.image} />
      </div>
      <div className={style.formsection}>
        <div className={style.heading}>
          Register
        </div>
        <form method='post' onSubmit={handleSubmit}>
          <input 
          type='text' 
          placeholder='Name' 
          name='name' 
          value={formData.name} 
          onChange={handleChange} 
          required 
          /><br />
          <input 
          type='text' 
          placeholder='Email' 
          name='email' 
          value={formData.email} 
          onChange={handleChange} 
          className={style.inputbox} 
          required 
          /><br />
          <input 
          type='password' 
          placeholder='Password' 
          name='password' 
          value={formData.password} 
          onChange={handleChange} 
          className={style.inputbox} 
          required 
          /><br />
          <input 
          type='password' 
          placeholder='Confirm Password' 
          name='confirmPassword' 
          value={formData.confirmPassword} 
          onChange={handleChange} 
          required 
          /><br />
          <button 
          type='submit' 
          className={style.btn} >
            Register
            </button>
        </form>
        <p>Already have an account?</p>
        <button className={style.loginbtn} onClick={() => { navigate('/Login') }}>Login</button>
      </div>
    </div>
  );
}

export default Register
