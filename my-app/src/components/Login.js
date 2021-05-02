import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { LoginContext } from './sub-components/LoginContext';
import axios from 'axios';



const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useState(true)
    const { setToken, adminID, setAdminID } = useContext(LoginContext);


    const submit = async (e) => {
        e.preventDefault()
        const data = JSON.stringify({username, password})
        const res = await axios({
        method: 'post',
        url: 'api/admin',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
        })
        .then(function (res){
          
          setToken(res.data.token);

          if (res.data.results[0].adminID == null){
            setAdminID(res.data.results[0].adminID);  
          } else {
            setAdminID(res.data.results[0].adminID);  
          }
        })
        .catch(function(res){
          console.log(res)
          setAuth(false)

        })
        console.log(res)
    }

  return (
    <div className="login">
      {!auth &&
        <h4>Incorrect Credentials!</h4>
      }
      <h1>Login</h1>
      <form className="contact-form" name="login" onSubmit={submit}>
        <input type="text" placeholder="username" name="username" autoComplete="off" onChange={e => setUsername(e.target.value)}/> 
        <input type="password" placeholder="password" name="password" onChange={e => setPassword(e.target.value)}/>
        <input className="form-btn" type="submit" value="Login"/>
      </form>
      { adminID ? <Redirect to="/adminpage" /> : null }

    </div>
  );
};

export default Login;

