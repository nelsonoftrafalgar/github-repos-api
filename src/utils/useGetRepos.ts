import { RepositoryData, RepositoryData_search_edges } from "./generatedTypes/RepositoryData"
import { useEffect, useState } from "react"

import { IRepoTile } from "../App"
import { SEARCH_REPOS } from "./queries"
import { useQuery } from "@apollo/react-hooks"

export const useGetRepos = (search: string) => {
  const [list, setList] = useState<IRepoTile[]>([])
  const [languages, setLanguages] = useState<string[]>([])
  const { loading, error, data } = useQuery(SEARCH_REPOS, { variables: { search } })

  const fetchData = (data: RepositoryData) => {
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
  }

  useEffect(() => {
    fetchData(data)
  }, [data])

  if (error) {
    console.log(error)
  }

  return { list, languages, loading }
}