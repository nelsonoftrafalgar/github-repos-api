import React, { useContext } from 'react'

import { SectionContainer } from './Head'
import { context } from '../context/context'
import styled from 'styled-components'
import { vars } from '../utils/styleVars'

interface IWithPadding  {
  withPadding?: boolean
}

const Wrapper = styled.div`
  margin-right: 30px;
`

const Input = styled('input')<IWithPadding>`
  border-radius: 2px;
  border: 1px solid ${vars['input-grey']};
  width: 200px;
  height: 30px;
  color: #000;
  font-family: ${vars['basic-font']};
  box-shadow: ${vars['box-shadow']};

  ${({withPadding}) => withPadding && 'padding-left: 5px;'}
`

const Button = styled.button`
  background-color: ${vars['button-color']};
  color: #fff;
  padding: 7px 10px;
  font-family: ${vars['basic-font']};

  &:hover {
    cursor: pointer;
    opacity: .7;
  }
`

const Search = () => {
  const {
    handleChange,
    handleClear,
    languages,
    search,
    filter
  } = useContext(context)

  const options = languages.map((lang) => {
    return (
      <option
        aria-selected={false}
        value={lang}
        key={lang}
      >
        {lang}
      </option>
    )
  })

  const selectValue = filter || 'Select language'

  return (
    <SectionContainer>
      <Wrapper>
        <Input
          withPadding={true}
          type='text'
          placeholder='Search'
          value={search}
          onChange={handleChange('search')}
        />
      </Wrapper>
      <Wrapper>
        <Button onClick={handleClear('search')}>Clear search</Button>
      </Wrapper>
      <Wrapper>
        <Input
          data-testid='filter-select'
          as='select'
          value={selectValue}
          onChange={handleChange('filter')}
        >
          <option aria-selected={false} value={selectValue} disabled={true}>{selectValue}</option>
          {options}
        </Input>
      </Wrapper>
      <Wrapper>
        <Button onClick={handleClear('filter')}>Clear filters</Button>
      </Wrapper>
    </SectionContainer>
  )
}

export default React.memo(Search)
