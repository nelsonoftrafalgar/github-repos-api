import LogoIcon from '../assets/logo/github.svg'
import React from 'react'
import styled from 'styled-components'

const LogoContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Image = styled.img`
  width: 100%;
`

const Logo = () => {
  return (
    <LogoContainer>
      <Image src={LogoIcon} alt='logo' />
    </LogoContainer>
  )
}

export default Logo
