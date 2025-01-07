import React from 'react'
import Landing from './pages/landing/Landing';
import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from './pages/homepage/Homepage';
import Details from './pages/details/Details';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path='/home' element={<Homepage/>}/>
        <Route path='/details' element={<Details/>}/>
      </Routes>
    </BrowserRouter>
 
  )
}

export default App