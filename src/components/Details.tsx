import LinkIcon from '../assets/icons/link.svg'
import React from 'react'
import styled from 'styled-components'
import { vars } from '../utils/styleVars'

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`

const Title = styled.h1`
  font-family: ${vars['basic-font']};
  font-size: 20px;
  color: ${vars['basic-font-color']};
`

const Link = styled.a`
  font-family: ${vars['basic-font']};
  color: ${vars['basic-font-color']};
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
        <img src={LinkIcon} alt="link-icon" />
        <Link 
          href="http://github.com" 
          target='_blank' 
          rel='noopener noreferrer'
        >
          http://github.com
        </Link>
      </IconContainer>
    </Wrapper>
  )
}

export default Details
