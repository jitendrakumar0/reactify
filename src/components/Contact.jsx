import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <>
    <div>Contact Page</div>
    <h2>Here we have some other business</h2>
    <Link to="company">Company</Link>
    <Link to="channel">Channel</Link>
    <Link to="other">Other</Link>
    <Outlet />
    </>
  )
}

export default Contact