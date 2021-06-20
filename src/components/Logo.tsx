import { breakpoints, mediaQueries } from 'styles/responsive'

import LogoIcon from 'assets/logo/github.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
	width: 70px;
	height: 70px;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	${mediaQueries.up(breakpoints.md)} {
		width: 100px;
		height: 100px;
	}
`
const Image = styled.img`
	width: 100%;
`

const Logo = () => (
	<LogoContainer>
		<Image data-testid='logo' src={LogoIcon} alt='logo' />
	</LogoContainer>
)

export default Logo
