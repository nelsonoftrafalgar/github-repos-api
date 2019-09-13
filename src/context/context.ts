import { IRepoTile } from "../utils/useFetch"
import React from "react"

interface IContext {
  list: IRepoTile[]
  filter: string
  name: string
  handleFilterRepos: (language: string) => void
  handleClearFilter: () => void
  handleFindByName: (e: React.FormEvent<HTMLInputElement>) => void
  handleToggleAdd: (name: string, value: boolean) => () => void
}

export const context = React.createContext({} as IContext)