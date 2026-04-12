import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Jobs from './pages/Jobs';
import CompanyProfile from './pages/Companies';


const App = () => {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/companies" element={<CompanyProfile />} />
       
      </Routes>
    </BrowserRouter>
  )
}

export default App
