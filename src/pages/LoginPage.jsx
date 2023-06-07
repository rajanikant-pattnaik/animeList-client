import React from 'react'

const LoginPage = () => {
  return (
    <div className='login-page'>
      <div className="login-card">
        <label htmlFor="email">email</label>
        <input type="email" />
        <label htmlFor="password">Password</label>
        <input type="password" />
        <button className="submit">submit</button>
      </div>
    </div>
  )
}

export default LoginPage
