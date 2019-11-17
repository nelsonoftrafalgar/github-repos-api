import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  margin: 0 auto;
  width: 1200px;
  height: 100vh;
`

const Container: React.FC = ({ children }) => {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}

export default Container
