import React from 'react'
import { useState } from 'react'
import style from './Register.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router'

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      console.log("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/register', formData);
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
          Register
        </div>
        <form method='post' onSubmit={handleSubmit}>
          <input type='text' placeholder='Name' name='name' value={formData.name} onChange={handleChange} /><br />
          <input type='text' placeholder='Email' name='email' value={formData.email} onChange={handleChange} className={style.inputbox} /><br />
          <input type='password' placeholder='Password' name='password' value={formData.password} onChange={handleChange} className={style.inputbox} /><br />
          <input type='password' placeholder='Confirm Password' name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} /><br />
          <button type='submit' className={style.btn} >Register</button>
        </form>
        <p>Already have an account?</p>
        <button className={style.loginbtn} onClick={()=>{navigate('/LoginPage')}}>Login</button>
      </div>
    </div>
  );
}

export default Register
