import React from 'react'

const User = () => {
  return (
    <div style={{textAlign:"center"}}>
    <h1>POST API Example</h1>
    <input type='text' name='name' /><br /><br />
    <input type='text' name='email' /><br /><br />
    <input type='tel' name='mobile' /><br /><br />
    <button type='button'>Save New User</button>
    </div>
  )
}

export default User