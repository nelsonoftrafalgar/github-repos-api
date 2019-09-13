import './Search.scss'

import React from 'react'
import SearchIcon from '../../assets/icons/search.svg'

const Search = () => {
  const languages = ['Ruby', 'Kotlin', 'Swift', 'Dart', 'HTML', 'JavaScript', 'Shell', 'TypeScript', 'Vue', 'Elixir']

  const options = languages.map((language) => {
    return <option key={language} value={language}>{language}</option>
  })

  return (
    <div className='search-container'>
      <div className='search-input-wrapper'>
        <input className='search-input' type="text" placeholder='Search' />
        <button><img src={SearchIcon} alt="search-icon" /></button>
      </div>
      <div className='search-select-wrapper'>
        <select className='search-select'>
          <option value="" disabled selected>Select language</option>
          {options}
        </select>
      </div>
      <div className='search-clear-wrapper'>
        <button className='search-clear-btn'>Clear filters</button>
      </div>
    </div>
  )
}

export default Search
