import React from 'react'
import Landing from './pages/landing/Landing';
import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from './pages/homepage/Homepage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path='/home' element={<Homepage/>}/>
      </Routes>
    </BrowserRouter>
 
  )
}

export default App