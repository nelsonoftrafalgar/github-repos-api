import './App.css'

import { ChangeEventType, ClearType } from './utils/config'
import React, { useState } from 'react'

import Container from './containers/Container'
import Head from './containers/Head'
import List from './containers/List'
import Search from './containers/Search'
import { context } from './context/context'
import { useGetRepos } from './utils/useGetRepos'

const { Provider } = context

const App: React.FC = () => {
  const [filter, setFilter] = useState<string>('')
  const [search, setSearch] = useState<string>('')

  const { list, languages, loading } = useGetRepos(search)

  const handleChange = (type: ClearType) => (e: ChangeEventType) => {
    const { value } = e.currentTarget
    if (type === 'search') {
      setSearch(value)
    } else {
      setFilter(value)
    }
  }

  const handleClear = (type: ClearType) => () => {
    if (type === 'search') {
      setSearch('')
    } 
    setFilter('')
  }

  return (
    <Provider value={{
      list,
      handleChange,
      filter,
      handleClear,
      search,
      languages
    }}>
      <Container>
        <Head />
        <Search />
        {loading ? <p>Loading...</p> : <List />}
      </Container>
    </Provider>
  )
}

export default App
