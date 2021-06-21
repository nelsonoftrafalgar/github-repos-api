import { IRawData, IRepo } from 'store/types'

export const parseData = (rawData: IRawData): IRepo[] => {
	return rawData.search.edges.map(({ node }) => ({
		fullName: node.nameWithOwner,
		stargazersCount: node.stargazers.totalCount,
		forksCount: node.forks.totalCount,
		htmlUrl: node.url,
		language: node.primaryLanguage,
		name: node.name,
		description: node.description,
		id: node.id,
		watchersCount: node.watchers.totalCount,
	}))
}
