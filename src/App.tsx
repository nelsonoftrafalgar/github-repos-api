import { Container } from 'styles/shared'
import Details from 'components/Details'
import List from 'components/List'
import Logo from 'components/Logo'
import Search from 'components/Search'
import Store from 'store/Store'
import styled from 'styled-components'

const MasterContainer = styled.div`
	margin: 0 auto;
	width: 1200px;
	height: 100vh;
`

const App = () => {
	return (
		<Store>
			<MasterContainer>
				<Container>
					<Logo />
					<Details />
				</Container>
				<Search />
				<List />
			</MasterContainer>
		</Store>
	)
}

export default App
