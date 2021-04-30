import React, { useState, useEffect } from 'react'
import { Redirect, useHistory, useLocation } from 'react-router-dom'
import { LoginContext } from './sub-components/LoginContext';
import axios from 'axios';


function Login() {
  let history = useHistory();
  let location = useLocation();
  const [auth, setAuth] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async event => {
      event.preventDefault()
      const response = await fetch('http://localhost:3001/auth', {
          method: 'POST',
          headers: {
              'Accept': "application/json",
              'Content-Type': "application/json"
          },
          body: JSON.stringify({username, password})
      })
      const payload = await response.json()
      if (response.status >= 400) {
          setAuth(false)
          alert('Unable to verify credentials')
      } else {
          sessionStorage.setItem('token', payload.token)

          let { from } = location.state || { from: { pathname: "/login" } };
          history.replaceState(from);
      }
  }
  
    return (
        
     <div className="login">
      {!auth &&
        <h4>Incorrect Username or Password</h4>
      }
      <h1>Admin Login</h1>
      <form className="contact-form" name="login" onSubmit={handleSubmit}>
        <input type="text" placeholder="username" name="username" autoComplete="off" onChange={e => setUsername(e.target.value)}/> 
        <input type="password" placeholder="password" name="password" onChange={e => setPassword(e.target.value)}/>
        <input className="form-btn" type="submit" value="Login"/>
      </form>
      
      
    </div>
  );
}    


    export default Login;