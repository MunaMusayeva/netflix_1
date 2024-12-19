import React from 'react'
import Landing from './pages/landing/Landing';
import { BrowserRouter, Routes, Route } from "react-router";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
 
  )
}

export default App