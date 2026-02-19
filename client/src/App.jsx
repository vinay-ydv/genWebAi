import React from 'react'
import  {BrowserRouter, Navigate, Route, Routes, useNavigate} from "react-router-dom"
import Home from '../pages/Home.jsx'
import UseGetCurrentUser from './hooks/UseGetCurrentUser.jsx'
import { useSelector } from 'react-redux'
import Dashboard from '../pages/Dashboard.jsx'
import Generate from '../pages/Generate.jsx'
import Editor from '../pages/Editor.jsx'
export const serverUrl="http://localhost:8000"

const App = () => {
  UseGetCurrentUser()
  const {userData}= useSelector(state=>state.user)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dashboard' element={userData?<Dashboard/>:<Home/>}/>
      <Route path='/generate' element={userData?<Generate/>:<Home/>}/>
            <Route path='/editor/:id' element={userData?<Editor/>:<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
