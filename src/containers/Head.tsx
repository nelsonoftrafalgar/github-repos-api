import Details from '../components/Details'
import Logo from '../components/Logo'
import React from 'react'
import styled from 'styled-components'

export const SectionContainer = styled.div`
  display: flex;
  margin-top: 30px;
`

const Head = () => {
  return (
    <SectionContainer>
      <Logo />
      <Details />
    </SectionContainer>
  )
}

export default Head