import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import User from './components/User'
import Filter from './components/Filter'
import Contact from './components/Contact'
import Company from './components/Company'
import Channel from './components/Channel'
import Other from './components/Other'
import Login from './components/Login'
import Protected from './components/Protected'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Protected Component={Home} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<Protected Component={About} />} />
        <Route path="/user/:name" element={<Protected Component={User} />} />
        <Route path="/filter" element={<Protected Component={Filter} />} />
        <Route path="/*" element={<Navigate to="/" />} />
        <Route path="/contact/" element={<Protected Component={Contact} />}>
          <Route path="company" element={<Protected Component={Company} />} />
          <Route path="channel" element={<Protected Component={Channel} />} />
          <Route path="other" element={<Protected Component={Other} />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App