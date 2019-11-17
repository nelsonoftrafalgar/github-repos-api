import { ChangeEventType, ClearType, IRepoTile } from './utils/config'
import React, { useCallback, useEffect, useState } from 'react'
import { RepositoryData, RepositoryData_search_edges } from './utils/generatedTypes/RepositoryData'

import Container from './containers/Container'
import Head from './containers/Head'
import List from './containers/List'
import { SEARCH_REPOS } from './utils/queries'
import Search from './containers/Search'
import { context } from './context/context'
import { useQuery } from '@apollo/react-hooks'

const { Provider } = context

const App: React.FC = () => {
  const [filter, setFilter] = useState<string>('')
  const [search, setSearch] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [list, setList] = useState<IRepoTile[]>([])
  const [languages, setLanguages] = useState<string[]>([])

  const { error, data } = useQuery(SEARCH_REPOS, { variables: { search } })

  const fetchData = useCallback((response: RepositoryData) => {
    if (response) {
      const languagesList: string[] = []
      const result = response.search.edges.map((repo: RepositoryData_search_edges) => {
        const repoTile = {} as IRepoTile

        repoTile.fullName = repo.node.nameWithOwner
        repoTile.stargazersCount = repo.node.stargazers.totalCount
        repoTile.forksCount = repo.node.forks.totalCount
        repoTile.htmlUrl = repo.node.url
        repoTile.language = repo.node.primaryLanguage
        repoTile.name = repo.node.name
        repoTile.description = repo.node.description
        repoTile.id = repo.node.id
        repoTile.watchersCount = repo.node.watchers.totalCount

        if (repoTile.language) {
          languagesList.push(repoTile.language.name)
        }

        return repoTile
      })
      setLanguages([...new Set(languagesList)] as string[])
      setList(result)
    }
    setLoading(false)
  }, [setLoading])

  useEffect(() => {
    if (search) {
      fetchData(data)
    }
  }, [data, fetchData])

  const handleChange = useCallback((type: ClearType) => (e: ChangeEventType) => {
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
  }, [])

  const handleClear = useCallback((type: ClearType) => () => {
    if (type === 'search') {
      setSearch('')
      setList([])
    }
    setFilter('')
  }, [])

  const loadingState = <p>Loading...</p>
  const emptyState = <p>There's no such repo :(</p>

  if (error) {
    return (
      <p>API error</p>
    )
  }

  return (
    <Provider
      value={{
        list,
        handleChange,
        filter,
        handleClear,
        search,
        languages
      }}
    >
      <Container>
        <Head />
        <Search />
        {loading ? loadingState : !list.length && search.length ? emptyState : <List/>}
      </Container>
    </Provider>
  )
}

export default App
