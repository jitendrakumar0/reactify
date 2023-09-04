import './App.scss';
import React,{useEffect,useState} from 'react'
// import User from './User';

function App() {
  const [data,setData]=useState([]);
  useEffect(()=> {
    fetch("http://localhost:3000/todo").then((result)=>{
      result.json().then((resp)=>{
        // console.warn(resp);
        setData(resp);
      })
    })
  },[])
  console.warn(data)
  return (
    <div className="App" style={{textAlign:"center"}}>
      <h1>This is React Bro</h1>
      <table border="1" cellSpacing="0" style={{margin:"auto", textAlign:"left"}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item,i)=>
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>
            </tr>
            )
          }
        </tbody>
      </table>
    </div>
    // <User />
  );
}

export default App;
