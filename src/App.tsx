import './App.css';

import React, { useState } from 'react'

import Container from './containers/Container/Container'
import Head from './containers/Head/Head'
import List from './containers/List/List'
import Search from './containers/Search/Search'
import { context } from './context/context'
import { handleStorage } from './utils/handleStorage'
import { useFetch } from './utils/useFetch'

const { Provider } = context

const App: React.FC = () => {
  const [filter, setFilter] = useState<string>('')
  const [name, setName] = useState<string>('')
  const { list, setList } = useFetch()

  const handleToggleAdd = (name: string, value: boolean) => () => {
    const updatedList = list.map((item) => {
      if (item.name === name) {
        item.isAdded = !item.isAdded
      }
      return item
    })

    setList(updatedList)

    handleStorage(name, value)
  }

  const handleFilterRepos = (language: string) => {
    setName('')
    setFilter(language)
  }

  const handleClearFilter = () => {
    setFilter('')
    setName('')
  }

  const handleFindByName = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    setFilter('')
    setName(value)
  }

  return (
    <Provider value={{
      list,
      handleFilterRepos,
      filter,
      handleClearFilter,
      handleFindByName,
      name,
      handleToggleAdd
    }}>
      <Container>
        <Head />
        <Search />
        <List />
      </Container>
    </Provider>
  )
}

export default App
