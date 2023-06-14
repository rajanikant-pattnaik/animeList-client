import React, {  useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [form, setform] = useState({
   "name":"",
   "email":"",
   "password":""
  })
  const navigate=useNavigate();
  const handleChange=(e)=>{
    setform({
      ...form,
      [e.target.name]:e.target.value
    })
  }
  const handleSubmit= async(e)=>{
    e.preventDefault();
    try {
        await axios.post("/users/new", form);
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
  }
  useEffect(() => {
    if (localStorage.getItem('user')) {
      navigate("/");
    }
  },[navigate]);
  return (
    <div className='login-page'>
      <div className="login-card">
        <label htmlFor="name">name</label>
        <input name="name" type="name" onChange={handleChange} />
        <label htmlFor="email">email</label>
        <input name="email" type="email" onChange={handleChange} />
        <label htmlFor="password" >Password</label>
        <input name="password" type="password" onChange={handleChange} />
        <button className="submit" onClick={handleSubmit}>submit</button>
      </div>
    </div>
  )
}

export default RegisterPage
