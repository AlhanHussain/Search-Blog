import React from 'react'

const SearchBox = ({searchQuery, setSearchQuery}) => {
  return (
    <div className='search-box'>
        <input onChange={(e)=>setSearchQuery(e.target.value)} className='search-input' placeholder="Search for articles" type="text" value={searchQuery}  />
    </div>
  )
}

export default SearchBox