import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <h2>Home Page</h2>
    <p>this is a home page of our aweome app</p>
    <p>and here we are leraning about Router</p>
    <Link to="/about">About</Link>
    </>
  )
}

export default Home