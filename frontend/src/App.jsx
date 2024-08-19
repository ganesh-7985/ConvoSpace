import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//lazy is a function that enables lazy loading of components. It allows you to defer loading a component's code until it is actually needed.
//  This can significantly improve the performance of your application,

import Login from './pages/Login'
import Home from './pages/Home'
import Groups from './pages/Groups'
import Chat from './pages/Chat'

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/groups" element={<Groups/>}/>
        <Route path="/chat/:id" element={<Chat/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App