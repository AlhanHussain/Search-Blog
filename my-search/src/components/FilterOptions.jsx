import React from 'react'

const FilterOptions = ({filter, setFilter}) => {
  return (
    <div className="filter-options"> 
 <label>
    <input type="radio" value='all' checked={filter === 'all'}
      onChange={(e)=>setFilter(e.target.value)}
    />All
 </label>
 <label>
    <input type="radio" value='blog' checked={filter === 'blog'}
      onChange={(e)=>setFilter(e.target.value)}
    />Blog
 </label>
 <label>
    <input type="radio" value='article' checked={filter === 'article'}
      onChange={(e)=>setFilter(e.target.value)}
    />Article
 </label>

    </div>
  )
}

export default FilterOptions