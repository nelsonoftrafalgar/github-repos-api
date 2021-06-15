import LinkIcon from 'assets/icons/link.svg'
import styled from 'styled-components'
import { vars } from 'styles/vars'

const IconContainer = styled.div`
	display: flex;
	align-items: center;
	margin-right: 20px;
`

const Title = styled.h1`
	font-family: ${vars.basic_font};
	font-size: 20px;
	color: ${vars.basic_font_color};
`

const Link = styled.a`
	font-family: ${vars.basic_font};
	color: ${vars.basic_font_color};
	margin-left: 5px;
`

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	margin-left: 30px;
`

const Details = () => {
	return (
		<Wrapper>
			<Title>Search Github repositories</Title>
			<IconContainer>
				<img src={LinkIcon} alt='link-icon' />
				<Link href='https://github.com' target='_blank' rel='noopener noreferrer'>
					https://github.com
				</Link>
			</IconContainer>
		</Wrapper>
	)
}

export default Details
