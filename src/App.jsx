import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Jobs from './pages/Jobs';
import CompanyProfile from './pages/Companies';
import CompanyDetails from './pages/CompanyDetails';
import Navbar from './components/Navbar';
import Auth from './pages/Auth';


const App = () => {
  return (
   <BrowserRouter>
       <Navbar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/companies" element={<CompanyProfile />} />
        <Route path="/companies/:id" element={<CompanyDetails />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
