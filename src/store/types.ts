import { Dispatch, SetStateAction } from 'react'

import { ApolloError } from '@apollo/client'

export interface IRawData {
	search: {
		edges: Array<{
			node: {
				description: string
				forks: {
					totalCount: number
				}
				id: string
				name: string
				nameWithOwner: string
				primaryLanguage: {
					name: string
					color: string
				}
				stargazers: {
					totalCount: number
				}
				url: string
				watchers: {
					totalCount: number
				}
			}
		}>
	}
}

export interface IRepo {
	fullName: string
	stargazersCount: number
	forksCount: number
	htmlUrl: string
	language: { name: string; color: string } | null
	name: string
	description: string
	id: string
	watchersCount: number
}

export interface IStoreContext {
	repoList: IRepo[]
	filter: string
	languages: string[]
	loading: boolean
	error: ApolloError | undefined
	isEmptySearch: boolean
	setFilter: Dispatch<SetStateAction<string>>
	setSearch: Dispatch<SetStateAction<string>>
	search: string
}
