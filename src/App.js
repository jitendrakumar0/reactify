import './App.scss';
import React, { useEffect, useState } from 'react'
import PutForm from './PutForm';

function App() {
  const [apiData,setApiData]=useState([])
  const [data, setData]=useState([])

  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [mobile,setMobile]=useState("")
  const [userId,setUserId]=useState(null)

  useEffect(()=>{
    getData()
  },[data])
  function getData() {
    fetch('http://localhost:3000/todo').then((result)=>{
      result.json().then((res)=>{
        setApiData(res);
        setName(res[0].name)
        setEmail(res[0].email)
        setMobile(res[0].mobile)
      })
    })
  }
  // console.log(apiData)
  function deleteUser(id) {
    fetch(`http://localhost:3000/todo/${id}`, {
      method:'DELETE'
    }).then((result)=>{
      result.json().then((res)=>{
        console.log(res)
        getData()
      })
    })
  }
  function selectUser(id) {
    console.log(apiData[id])
    setName(apiData[id].name)
    setEmail(apiData[id].email)
    setMobile(apiData[id].mobile)
    setUserId(apiData[id].id)
  }
  function updateUser() {
    
    const data = {name,email,mobile,userId}
    fetch(`http://localhost:3000/todo/${userId}`, {
      method:"PUT",
      headers: {
        'Accept':'Application/json',
        'Content-Type':'Application/json'
      },
      body:JSON.stringify(data)
    })
    getData()
  }
  return (
    <div className="App">
      <PutForm setData={setData} />
      <h1>This is React Bro</h1>
      <table border='1' cellSpacing='0' cellPadding="10" style={{margin:"auto"}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            apiData.map((item,i)=>
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>
              <td>
                <button onClick={()=>deleteUser(item.id)}>Delete</button>
                <button onClick={()=>selectUser(i)}>Edit</button>
              </td>
            </tr>
            )
          }
        </tbody>
      </table>
      <br />
      <br />
      <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} name='name' /><br /><br />
      <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} name='email' /><br /><br />
      <input type="text" value={mobile} onChange={(e)=>{setMobile(e.target.value)}} name='mobile' /><br /><br />
      <button onClick={updateUser}>Update User</button>
      <br /><br />  
    </div>
  );
}

export default App;
