import './Search.scss'

import React, { useContext } from 'react'

import { context } from '../../context/context'

const Search = () => {
  const { handleFilterRepos, handleClearFilter, languages, handleInputChange, search, filter } = useContext(context)

  const options = languages.map((lang) => {
    return <option value={lang} key={lang}>{lang}</option>
  })

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target
    handleFilterRepos(value)
  }

  const selectValue = filter || 'Select language'

  return (
    <div className='search-container'>
      <div className='search-input-wrapper'>
        <input className='search-input' type="text" placeholder='Search' value={search} onChange={handleInputChange} />
      </div>
      <div className='search-select-wrapper'>
        <select value={selectValue} onChange={handleSelect} className='search-select'>
          <option value={selectValue} disabled>{selectValue}</option>
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
