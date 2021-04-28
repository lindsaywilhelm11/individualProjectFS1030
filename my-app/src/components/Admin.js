import React, { useEffect, useState } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import parseJwt from '../helpers/authHelper';


const Admin = () => {
    let history = useHistory();
    const token = sessionStorage.getItem('token')
    const user = parseJwt(token).username
    const [users, setUsers] = useState([])
    const logout = event => {
        event.preventDefault()
        sessionStorage.removeItem('token')
        history.push("/login")
    }
    useEffect(() => {
        const getData = async () => {
            const response = await fetch('http://localhost:3001/admin', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            const data = await response.json()
            setUsers(data)
        }
        getData()
    }, [token])
    return (
        <h1>User Information: {user}</h1>,
        <table>
            <thead>
                    <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length === 0 &&
                        <tr><td colSpan="4" className="text-center"><i>No listings found</i></td></tr>
                    }
                    {users.length > 0 &&
                        users.map(entry => <tr><td>{entry.id}</td><td>{entry.firstName}</td><td>{entry.lastName}</td><td>{entry.email}</td><td>{entry.message}</td></tr>)
                    }
                </tbody>
        </table>
        
    )
    
}

export default withRouter(Admin);