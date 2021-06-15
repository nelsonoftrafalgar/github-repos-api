import Repo from 'components/Repo'
import styled from 'styled-components'
import { useStore } from 'store/Store'

const ListWrapper = styled.div`
	margin: 10px 0 50px 0;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`

const Loader = styled.div`
	margin-top: 50px;
	width: 100%;
	display: flex;
	justify-content: center;
`

const Error = styled.div`
	margin-top: 50px;
	width: 100%;
	display: flex;
	justify-content: center;
`

const EmptySearch = styled.div`
	margin-top: 50px;
	width: 100%;
	display: flex;
	justify-content: center;
`

const List = () => {
	const { repoList, loading, error, isEmptySearch } = useStore()

	if (isEmptySearch) {
		return <EmptySearch>Empty search</EmptySearch>
	}

	if (error) {
		return <Error>{error.message}</Error>
	}

	if (loading) {
		return <Loader>Loading ...</Loader>
	}

	return (
		<ListWrapper data-testid='ListWrapper'>
			{repoList.map((repo) => (
				<Repo key={repo.id} {...repo} />
			))}
		</ListWrapper>
	)
}

export default List
