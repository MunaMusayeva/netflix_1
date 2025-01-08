import React from 'react'
import Landing from './pages/landing/Landing';
import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from './pages/homepage/Homepage';
import Details from './pages/details/Details';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path='/home' element={<Homepage/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
 
  )
}

export default App