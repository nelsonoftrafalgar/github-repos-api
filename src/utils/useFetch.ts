import { useEffect, useState } from "react"

export interface IRepoTile {
  fullName: string
  stargazersCount: number
  forksCount: number
  htmlUrl: string
  language: string
  name: string
  description: string
  id: number
  watchersCount: number
  isAdded: boolean
}

export const useFetch = () => {
  const [list, setList] = useState<IRepoTile[]>([])
  useEffect(() => {
    const url = 'https://api.github.com/users/Appnroll/repos'
    fetch(url)
      .then((data) => data.json())
      .then((repos) => {
        const list = repos.map((repo: any) => {
          const repoTile = {} as IRepoTile

          const storage = JSON.parse(window.localStorage.getItem('added') as string) || []

          repoTile.fullName = repo.full_name
          repoTile.stargazersCount = repo.stargazers_count
          repoTile.forksCount = repo.forks_count
          repoTile.htmlUrl = repo.html_url
          repoTile.language = repo.language
          repoTile.name = repo.name
          repoTile.description = repo.description
          repoTile.id = repo.id
          repoTile.watchersCount = repo.watchers_count
          repoTile.isAdded = storage.includes(repo.name)

          return repoTile
        })
        setList(list)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return { list, setList }
}