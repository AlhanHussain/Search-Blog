import React, { useContext, useState } from 'react'
import { AppContext } from './context/AppContext'
import SearchBox from './components/SearchBox'
import FilterOptions from './components/FilterOptions'
import Results from './components/Results'

const App = () => {

const [searchQuery, setSearchQuery] = useState('')
const [filter, setFilter] = useState('all')
const {dummyData} = useContext(AppContext) 

const filteredData = dummyData.filter((item)=>{
  const matchesFilter = filter === 'all' || item.type === filter
    const matchesSearch = 
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
    item.content.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSearch && matchesFilter
})




  return (
    <div className='app'>
      <h1>Search Page</h1>
      <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <FilterOptions filter={filter} setFilter={setFilter}/>
      <Results dummyData={filteredData}/>
    </div>
  )
}

export default App