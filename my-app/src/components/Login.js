import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { LoginContext } from '../sub-components/LoginContext';
import axios from 'axios';



const Login = () => {
    // let history = useHistory();
    // let location = useLocation();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useState(true);
    const { setToken, adminID, setAdminID } = useContext(LoginContext);


    const submit = async (e) => {
        e.preventDefault()
        const data = JSON.stringify({username, password})
        const res = await axios({
        method: 'post',
        url: 'api/auth',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
        })
        .then(function (res){
          //sessionStorage.setItem('token', res.data.token)
          //console.log(payload.data.results[0].Username)
          setToken(res.data.token);

          if (res.data.results[0].AdminID == null){
            setAdminID(res.data.results[0].adminID);  
            
            // let { from } = location.state || { from: { pathname: "/patient/" } };
            // history.replace(from);
          } else {
            adminID(res.data.results[0].id);  
            // let { from } = location.state || { from: { pathname: "/superpanel/"} };
            // history.replace(from);
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
        <h4>Incorrect Username or Password</h4>
      }
      <h1>Admin Login</h1>
      <form className="contact-form" name="login" onSubmit={submit}>
        <input type="text" placeholder="username" name="username" autoComplete="off" onChange={e => setUsername(e.target.value)}/> 
        <input type="password" placeholder="password" name="password" onChange={e => setPassword(e.target.value)}/>
        <input className="form-btn" type="submit" value="Login"/>
      </form>
      { adminID ? <Redirect to="/adminpanel" /> : null }
      
    </div>
  );
}    


    export default Login;