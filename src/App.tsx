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

  const [loading, setLoading] = useState(false)

  const { list, languages} = useGetRepos(search, setLoading)
  const handleChange = (type: ClearType) => (e: ChangeEventType) => {
    const { value } = e.currentTarget
    if (type === 'search') {
      setLoading(true)
      const regex = /^[0-9a-zA-Z\s]*$/
      const hasNoSpecialChars = regex.test(value)
      if (hasNoSpecialChars) {
        setSearch(value)
      }
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
  
  const loadingState = <p>Loading...</p>
  const emptyState = <p>There's no such repo :(</p>

  return (
    <Provider value={{
      list,
      handleChange,
      filter,
      handleClear,
      search,
      languages,
    }}>
      <Container>
        <Head />
        <Search />
        {loading ? loadingState : !list.length && search.length ? emptyState : <List/>}
      </Container>
    </Provider>
  )
}

export default App
