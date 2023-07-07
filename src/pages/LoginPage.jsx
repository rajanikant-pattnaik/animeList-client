import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contextApi/UserContext';

const LoginPage = () => {
  const [form, setform] = useState({
   "email":"",
   "password":""
  })
  const {setuser}=useContext(UserContext);
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
    const {data}=await axios.post("/users/login",form);
    localStorage.setItem(
      "user",
      JSON.stringify({...data.curruser})
    );
    setuser({...data.curruser})
    navigate("/");
   } catch (error) {
     console.log(error)
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
        <label htmlFor="email">email</label>
        <input name="email" type="email" onChange={handleChange} />
        <label htmlFor="password" >Password</label>
        <input name="password" type="password" onChange={handleChange} />
        <button className="submit" onClick={handleSubmit}>submit</button>
      </div>
    </div>
  )
}

export default LoginPage
