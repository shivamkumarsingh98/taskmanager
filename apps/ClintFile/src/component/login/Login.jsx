import React from 'react'
import { useState } from 'react'
import style from './Login.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router'

function Login() {

  let navigate = useNavigate()
  const [formData, setFormData] = useState({
  
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/login', formData);
      console.log("Data saved to database", response.data);
      setFormData(response.data);

      navigate('/Dashbord')

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={style.body}>
      <div className={style.imagesection}>
        <img src='./images/Astro.png' alt='image' className={style.image} />
      </div>
      <div className={style.formsection}>
        <div className={style.heading}>
          Login
        </div>
        <form method='post' onSubmit={handleSubmit}>
          <input type='text' placeholder='Email' name='email' value={formData.email} onChange={handleChange} className={style.inputbox} /><br />
          <input type='password' placeholder='Password' name='password' value={formData.password} onChange={handleChange} className={style.inputbox} /><br />
          <button type='submit' className={style.btn} >Login</button>
        </form>
        <p>Don't have an account?</p>
        <button className={style.loginbtn} onClick={()=>navigate('./RegisterPage')}>Register</button>
      </div>
    </div>
  );
}

export default Login
