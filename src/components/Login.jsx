import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const login = () => {
        localStorage.setItem("login", true);
        navigate('/')
    }
    const navigate = useNavigate()
    useEffect(()=>{
        let login = localStorage.getItem('login');
        if(login){
            navigate('/')
        }
    })
  return (
    <div style={{textAlign:"center"}}>
    <h2>Login Page</h2>
    <input type="text" /><br />
    <input type="text" /><br />
    <button onClick={login}>Login</button>
    </div>
  )
}

export default Login