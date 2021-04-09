import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Admin from "./Admin"


function Login() {
    let history = useHistory();
    let location = useLocation();
    const [isAuth, setIsAuth] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async event => {
        event.preventDefault()
        const response = await fetch('http://localhost:5000/auth', {
            method: 'POST',
            headers: {
                'Accept': "application/json",
                'Content-Type': "application/json"
            },
            body: JSON.stringify({email, password})
        })
        const payload = await response.json()
        if (response.status >= 400) {
            setIsAuth(false)
            alert('Unable to verify credentials')
        } else {
            sessionStorage.setItem('token', payload.token)

            let { from } = location.state || { from: { pathname: "/login" } };
            history.replaceState(from);
        }
    }

    return (
        
        <section className="login">
            <Router>
            <h1 className="contentHeader">Lindsay Wilhelm</h1>
            <h4 className="contentSubHeader">Web Developer</h4>
            <hr />
            <h1 className="loginContent">Login</h1>
            <form className="loginContent" onSubmit={handleSubmit}>
            <input type="email" placeholder="Email"  onChange={e => setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <br />
                <Route path="/login" exact>
                <button className="button" onClick={()=> {setIsAuth(true);}}>Login</button>
                </Route>
                </form>
                </Router>  
           
            <ProtectedRoute path="/admin" component={Admin} isAuth={isAuth} />
            
        </section>
    )

    
}


    


    export default Login;