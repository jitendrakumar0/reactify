import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const User = () => {
    const params=useParams();
    const {name}=params;
    console.log(name)
    const location = useLocation();
    console.log(location)
  return (
    <>
    <h1>This is {name}'s page</h1>
    </>
  )
}

export default User