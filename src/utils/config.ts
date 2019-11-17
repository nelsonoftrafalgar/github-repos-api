export interface ILanguage { name: string, color: string }

export type ClearType = 'search' | 'filter'

export interface IContext {
  list: IRepoTile[]
  filter: string
  search: string
  languages: string[]
  handleClear: (type: ClearType) => () => void
  handleChange: (type: ClearType) => (e: ChangeEventType) => void
}

export interface IRepoTile {
  fullName: string
  stargazersCount: number
  forksCount: number
  htmlUrl: string
  language: ILanguage | null
  name: string
  description: string
  id: string
  watchersCount: number
  isAdded: boolean
}

export type InputType = HTMLInputElement | HTMLSelectElement

export type ChangeEventType = React.FormEvent<InputType> | React.ChangeEvent<InputType>

export type Icon = 'stars' | 'issues' | 'visitors'

export interface IFooterStatProps {
  type: Icon
  count: number
}
