import React from 'react'
import TopCompanies from '../components/TopCompanies'
import FiltersCompany from '../components/FiltersCompany'
import CompanyList from '../components/CompanyList'

const Companies = () => {
  return (
    <>
      <TopCompanies />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-10 flex flex-col md:flex-row gap-6 md:gap-8">
        
      
        <div className="w-full md:w-[300px] flex-shrink-0">
          <FiltersCompany />
        </div>

       
        <div className="flex-1">
          <CompanyList />
        </div>

      </div>
    </>
  )
}

export default Companies