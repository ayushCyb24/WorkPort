import React from 'react'
import SearchBar from '../components/Searchbar'
import Filters from '../components/Filters'
import JobList from '../components/JobList'

const Jobs = () => {
  return (
    <>
      <SearchBar />

     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-10 flex flex-col md:flex-row gap-6 md:gap-8">
        
       
        <div className="w-full md:w-[300px] flex-shrink-0">
          <Filters />
        </div>

        
        <div className="flex-1">
          <JobList />
        </div>

      </div>
    </>
  )
}

export default Jobs