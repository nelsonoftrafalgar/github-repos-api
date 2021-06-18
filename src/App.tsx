import styled, { createGlobalStyle } from 'styled-components'

import List from 'components/List'
import Logo from 'components/Logo'
import Search from 'components/Search'
import Store from 'store/Store'
import Title from 'components/Title'
import { vars } from 'styles/vars'

const StyleReset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }
  body {
    min-height: 100vh;
  }
  div#root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    background: white;
    font-family: ${vars.basic_font};
  }
`

const MasterContainer = styled.div`
	margin: 0 auto 20px auto;
	width: 100%;
	padding: 0 5px;
`

const Container = styled.div`
	display: flex;
	margin-top: 30px;
	flex-wrap: wrap;
`

const App = () => {
	return (
		<Store>
			<StyleReset />
			<MasterContainer>
				<Container>
					<Logo />
					<Title />
				</Container>
				<Search />
				<List />
			</MasterContainer>
		</Store>
	)
}

export default App
