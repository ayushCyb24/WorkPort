import React from 'react'
import Navbar from '../components/Navbar'
import TopCompanies from '../components/TopCompanies'

import FiltersCompany from '../components/FiltersCompany'
import CompanyList from '../components/CompanyList'

const Companies = () => {
  return (
    <>
    <Navbar />

    <TopCompanies />

    
<div className="max-w-7xl mx-auto px-6 py-10 flex gap-8">
  
  {/* LEFT - Filters */}
  <div className="w-[300px] flex-shrink-0">
    <FiltersCompany />
  </div>

  {/* RIGHT - Jobs */}
  <div className="flex-1">
    <CompanyList />
   </div>
   </div>
    </>
    
    
  )
}

export default Companies
