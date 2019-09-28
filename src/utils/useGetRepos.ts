import { RepositoryData, RepositoryData_search_edges } from "./generatedTypes/RepositoryData"
import { useCallback, useEffect, useState } from "react"

import { IRepoTile } from "./config"
import { SEARCH_REPOS } from "./queries"
import { useQuery } from "@apollo/react-hooks"

export const useGetRepos = (search: string, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
  const [list, setList] = useState<IRepoTile[]>([])
  const [languages, setLanguages] = useState<string[]>([])
  
  const { error, data } = useQuery(SEARCH_REPOS, { variables: { search } })
  
  const fetchData = useCallback((data: RepositoryData) => {
    if (data) {
      const languagesList: string[] = []
      const result = data.search.edges.map((repo: RepositoryData_search_edges) => {
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
    fetchData(data)
  }, [data, fetchData])

  if (error) {
    console.log(error)
  }

  return { list, languages }
}