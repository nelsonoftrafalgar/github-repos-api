import './Search.scss'

import React, { useContext } from 'react'

import { context } from '../../context/context'
import { languages } from '../../utils/languages'

const Search = () => {
  const { handleFilterRepos, handleClearFilter, name, handleFindByName } = useContext(context)

  const options = languages.map((language) => {
    return <option key={language} value={language}>{language}</option>
  })

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target
    handleFilterRepos(value)
  }

  return (
    <div className='search-container'>
      <div className='search-input-wrapper'>
        <input className='search-input' type="text" placeholder='Search' value={name} onChange={handleFindByName} />
      </div>
      <div className='search-select-wrapper'>
        <select onChange={handleSelect} className='search-select'>
          <option value="" disabled selected>Select language</option>
          {options}
        </select>
      </div>
      <div className='search-clear-wrapper'>
        <button onClick={handleClearFilter} className='search-clear-btn'>Clear filters</button>
      </div>
    </div>
  )
}

export default Search
