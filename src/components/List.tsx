import Col from 'styles/Col'
import Repo from 'components/Repo'
import Row from 'styles/Row'
import styled from 'styled-components'
import { useStore } from 'store/Store'

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
	const { repoList, loading, error, isEmptySearch, search } = useStore()

	if (search && isEmptySearch) {
		return <EmptySearch>Empty search</EmptySearch>
	}

	if (error) {
		return <Error>{error.message}</Error>
	}

	if (loading) {
		return <Loader>Loading ...</Loader>
	}

	return (
		<Row data-testid='ListWrapper'>
			{repoList.map((repo) => (
				<Col key={repo.id} sm={6} md={4}>
					<Repo {...repo} />
				</Col>
			))}
		</Row>
	)
}

export default List
