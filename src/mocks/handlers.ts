import { graphql } from 'msw'

export const handlers = [
	graphql.query('RepositoryData', (req, res, ctx) => {
		const { search } = req.variables

		if (search === 'react') {
			return res(
				ctx.data({
					search: {
						__typename: 'SearchResultItemConnection',
						edges: [
							{
								__typename: 'SearchResultItemEdge',
								node: {
									__typename: 'Repository',
									description: 'test description 1',
									forks: {
										totalCount: 1,
									},
									id: 'test id 1',
									name: 'test name 1',
									nameWithOwner: 'test nameWithOwner 1',
									primaryLanguage: {
										name: 'test primary language name 1',
										color: 'test primary language color 1',
									},
									stargazers: {
										totalCount: 1,
									},
									url: 'test url 1',
									watchers: {
										totalCount: 1,
									},
								},
							},
						],
					},
				})
			)
		}

		if (search === 'non existing repo') {
			return res(
				ctx.data({
					search: {
						__typename: 'SearchResultItemConnection',
						edges: [],
					},
				})
			)
		}

		if (search === 'multiple repos') {
			return res(
				ctx.data({
					search: {
						__typename: 'SearchResultItemConnection',
						edges: [
							{
								__typename: 'SearchResultItemEdge',
								node: {
									__typename: 'Repository',
									description: 'test description 1',
									forks: {
										totalCount: 1,
									},
									id: 'test id 1',
									name: 'test name 1',
									nameWithOwner: 'test nameWithOwner 1',
									primaryLanguage: {
										name: 'test primary language name 1',
										color: 'test primary language color 1',
									},
									stargazers: {
										totalCount: 1,
									},
									url: 'test url 1',
									watchers: {
										totalCount: 1,
									},
								},
							},
							{
								__typename: 'SearchResultItemEdge',
								node: {
									__typename: 'Repository',
									description: 'test description 2',
									forks: {
										totalCount: 1,
									},
									id: 'test id 2',
									name: 'test name 2',
									nameWithOwner: 'test nameWithOwner 2',
									primaryLanguage: {
										name: 'test primary language name 2',
										color: 'test primary language color 2',
									},
									stargazers: {
										totalCount: 1,
									},
									url: 'test url 2',
									watchers: {
										totalCount: 1,
									},
								},
							},
						],
					},
				})
			)
		}

		if (search === 'error') {
			return res(ctx.errors([{ message: 'api request error' }]))
		}
	}),
]
