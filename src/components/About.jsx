import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
    <h2>About Page</h2>
    <p>this is a home page of our aweome app</p>
    <p>and here we are leraning about Router</p>
    <li><Link to="/user/anil" state={{name:"Jitendra Kumar Bijarnia", age:27}}>Anil</Link></li>
    <li><Link to="/user/peter">Peter</Link></li>
    <Link to="/">Home</Link>
    </>
  )
}

export default About