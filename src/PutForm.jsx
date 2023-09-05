import React, { useState } from 'react'

const PutForm = ({setData}) => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [mobile,setMobile]=useState("");
    function saveUser() {
        // console.warn({name,email,mobile})
        let data = {name,email,mobile}
        fetch('http://localhost:3000/todo',{
            method:"POST",
            headers:{
                'Accept':'Application/json',
                'Content-Type':'Application/json'
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            console.log(result)
            setData(result)
        })
    }
  return (
    <div style={{margin:'auto', backgroundColor:'cyan', paddingBottom:'20px'}}>
        <h1>POST API Example</h1>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} name='name' /><br /><br />
        <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} name='email' /><br /><br />
        <input type="text" value={mobile} onChange={(e)=>{setMobile(e.target.value)}} name='mobile' /><br /><br />
        <button type='button' onClick={saveUser}>Save New User</button>
    </div>
  )
}

export default PutForm