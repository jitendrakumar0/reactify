import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Filter = () => {
    const [searchParams, setSearchParams]=useSearchParams();
    console.warn(searchParams.get("age"))
    console.warn(searchParams.get("city"))
    const age = searchParams.get("age")
    const city = searchParams.get("city")
  return (
    <>
    <h1>Filter Page</h1>
    <h3>Age is : {age}</h3>
    <h3>City is : {city}</h3>
    <input type="text" onChange={(e)=>setSearchParams({city:e.target.value,age:10})} placeholder='Set text in params' />
    <button onClick={()=>setSearchParams({age:40})}>Set Age in Query Params</button>
    </>
  )
}

export default Filter