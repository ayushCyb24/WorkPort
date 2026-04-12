import React from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/Searchbar'
import Filters from '../components/Filters'
import JobList from '../components/JobList'
const Jobs = () => {
  return (
    <>
    <SearchBar />

{/* MAIN LAYOUT */}
<div className="max-w-7xl mx-auto px-6 py-10 flex gap-8">
  
  {/* LEFT - Filters */}
  <div className="w-[300px] flex-shrink-0">
    <Filters />
  </div>

  {/* RIGHT - Jobs */}
  <div className="flex-1">
    <JobList />
   </div>
   </div>
    </>
  )
}

export default Jobs
