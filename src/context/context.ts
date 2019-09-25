import { IRepoTile } from "../App"
import React from "react"

interface IContext {
  list: IRepoTile[]
  filter: string
  search: string
  languages: string[]
  handleFilterRepos: (language: string) => void
  handleClearFilter: () => void
  handleInputChange: (e: React.FormEvent<HTMLInputElement>) => void
}

export const context = React.createContext({} as IContext)