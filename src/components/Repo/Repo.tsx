import FooterStat from './FooterStat'
import { IRepoTile } from '../../utils/config'
import React from 'react'
import RepoLinkIcon from '../../assets/icons/external_link.svg'
import styled from 'styled-components'
import { vars } from '../../utils/styleVars'

const Wrapper = styled('div')<{borderTopColor: string}>`
  width: 380px;
  border-radius: 5px;
  border: 1px solid ${vars['input-grey']};
  border-top-width: 5px;
  margin-top: 20px; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: ${vars['box-shadow']};
  ${({borderTopColor}) => `border-top-color: ${borderTopColor};`}
`

const InnerContainer = styled.div`
  padding: 30px;
`

const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

const Title = styled.h2`
  font-family: ${vars['basic-font']};
  font-size: 18px;
  color: ${vars['basic-font-color']};
`

const LinkWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
`

const LinkIcon = styled.img`
  margin-right: 10px;
`

const Link = styled.a`
  text-decoration: none;
  color: ${vars['button-color']};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const Description = styled.p`
  font-family: ${vars['basic-font']};
  color: ${vars['secondary-font-color']};
  margin-top: 20px;
`

const Footer = styled.div`
  widows: 100%;
  height: 90px;
  padding: 30px;
  background-color: #f6f9fe; 
  display: flex;
  justify-content: flex-end;
`


const Language = styled.div`
  margin-right: auto;
  display: flex;
  align-items: center;

  div {
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin-right: 5px;
  }
`

const Repo: React.FC<IRepoTile> = ({
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
    <Wrapper borderTopColor={color}>
      <InnerContainer>
        <TitleWrapper>
          <Title>{name}</Title>
        </TitleWrapper>
        <LinkWrapper>
          <LinkIcon src={RepoLinkIcon} alt="repo link icon" />
          <Link target='_blank' rel="noopener noreferrer" href={htmlUrl}>{fullName}</Link>
        </LinkWrapper>
        <Description>{description}</Description>
      </InnerContainer>
      <Footer>
        <Language>
          <div style={{ backgroundColor: color }} />
          <span>{language ? language.name : ''}</span>
        </Language>
        <FooterStat count={stargazersCount} type='stars' />
        <FooterStat count={watchersCount} type='visitors' />
        <FooterStat count={forksCount} type='issues' />
      </Footer>
    </Wrapper>
  )
}

export default Repo