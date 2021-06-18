import Col from 'styles/Col'
import { FC } from 'react'
import FooterStat from 'components/FooterStat'
import { IRepo } from 'store/types'
import RepoLinkIcon from 'assets/icons/external_link.svg'
import Row from 'styles/Row'
import styled from 'styled-components'
import { vars } from 'styles/vars'

const Wrapper = styled('div')<{ borderTopColor: string }>`
	width: 100%;
	border-radius: 5px;
	border: 1px solid ${vars.input_grey};
	border-top-width: 5px;
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	box-shadow: ${vars.box_shadow};
	overflow: hidden;
	${({ borderTopColor }) => `border-top-color: ${borderTopColor};`}
`

const InnerContainer = styled.div`
	padding: 15px;
`

const Title = styled.h2`
	font-family: ${vars.basic_font};
	font-size: 18px;
	color: ${vars.basic_font_color};
`

const LinkWrapper = styled.div`
	display: flex;
	margin-top: 20px;
`

const LinkIcon = styled.img`
	margin-right: 10px;
`

const Link = styled.a`
	text-decoration: none;
	color: ${vars.button_color};
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`

const Description = styled.p`
	font-family: ${vars.basic_font};
	color: ${vars.secondary_font_color};
	margin-top: 20px;
`

const Footer = styled.div`
	widows: 100%;
	height: 90px;
	padding: 15px;
	background-color: #f6f9fe;
	display: flex;
	justify-content: flex-end;
`

const Language = styled.div`
	display: flex;
	align-items: center;

	div {
		border-radius: 50%;
		width: 10px;
		height: 10px;
		margin-right: 5px;
	}
`

const Repo: FC<IRepo> = ({
	fullName,
	stargazersCount,
	forksCount,
	htmlUrl,
	language,
	name,
	description,
	watchersCount,
}) => {
	const color = `${language ? language.color : ''}`

	return (
		<Wrapper borderTopColor={color} data-testid='RepoWrapper'>
			<InnerContainer>
				<Title>{name}</Title>
				<LinkWrapper>
					<LinkIcon src={RepoLinkIcon} alt='repo link icon' />
					<Link target='_blank' rel='noopener noreferrer' href={htmlUrl}>
						{fullName}
					</Link>
				</LinkWrapper>
				<Description>{description}</Description>
			</InnerContainer>
			<Footer>
				<Row>
					<Col>
						<Language>
							<div style={{ backgroundColor: color }} />
							<span>{language ? language.name : ''}</span>
						</Language>
					</Col>
					<Col xs={4}>
						<FooterStat count={stargazersCount} type='stars' />
					</Col>
					<Col xs={4}>
						<FooterStat count={watchersCount} type='visitors' />
					</Col>
					<Col xs={4}>
						<FooterStat count={forksCount} type='issues' />
					</Col>
				</Row>
			</Footer>
		</Wrapper>
	)
}

export default Repo
