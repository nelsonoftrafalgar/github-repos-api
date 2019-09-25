import './App.css'

import React, { useState } from 'react'

import Container from './containers/Container/Container'
import Head from './containers/Head/Head'
import List from './containers/List/List'
import Search from './containers/Search/Search'
import { context } from './context/context'
import { useGetRepos } from './utils/useGetRepos'

const { Provider } = context

export type Language = { name: string, color: string }

export interface IRepoTile {
  fullName: string
  stargazersCount: number
  forksCount: number
  htmlUrl: string
  language: Language | null
  name: string
  description: string
  id: number
  watchersCount: number
  isAdded: boolean
}

const App: React.FC = () => {
  const [filter, setFilter] = useState<string>('')
  const [search, setSearch] = useState<string>('')

  const { list, languages, loading } = useGetRepos(search)

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value)
  }

  const handleFilterRepos = (language: string) => {
    setFilter(language)
  }

  const handleClearFilter = () => {
    setFilter('')
  }

  return (
    <Provider value={{
      list,
      handleFilterRepos,
      filter,
      handleClearFilter,
      search,
      handleInputChange,
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
