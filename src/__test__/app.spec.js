import '@testing-library/jest-dom/extend-expect'

import {cleanup, fireEvent, render, waitForElement, within} from '@testing-library/react'

import { ApolloProvider } from '@apollo/react-hooks'
import App from '../App'
import React from 'react'
import { client } from '../utils/graphql'
import userEvent from '@testing-library/user-event'

afterEach(cleanup)

const setup = () => {
  const utils = render(<ApolloProvider client={client}><App /></ApolloProvider>)
  return utils
}

test('app renders', () => {
  const {getByText} = setup()

  expect(getByText('Search Github repositories')).toBeInTheDocument()
  expect(getByText('Clear search')).toBeInTheDocument()
  expect(getByText('Clear filters')).toBeInTheDocument()
})

test('search works', async () => {
  const {getByPlaceholderText, getByTestId, getAllByTestId} = setup()
  const input = getByPlaceholderText('Search')

  fireEvent.change(input, {target: {value: 'react'}})
  expect(input.value).toBe('react')

  const listWrapper = await waitForElement(() => getByTestId('ListWrapper'))
  const reposArray = within(listWrapper).getAllByTestId('RepoWrapper')

  expect(reposArray.length).toBe(30)
})

test('clear search works', async () => {
  const {getByText, getByPlaceholderText, getByTestId, queryByTestId} = setup()
  const input = getByPlaceholderText('Search')
  const clearButton = getByText('Clear search')

  fireEvent.change(input, {target: {value: 'react'}})

  const listWrapper = await waitForElement(() => getByTestId('ListWrapper'))

  expect(listWrapper).toBeInTheDocument()

  fireEvent.click(clearButton)

  expect(queryByTestId('RepoWrapper')).not.toBeInTheDocument()
  expect(getByPlaceholderText('Search')).toHaveValue('')
})

test('filter search works', async () => {
  const {getByPlaceholderText, getByTestId, getAllByTestId} = setup()
  const input = getByPlaceholderText('Search')

  fireEvent.change(input, {target: {value: 'react'}})

  const filterSelect = getByTestId('filter-select')

  userEvent.selectOptions(filterSelect, ['HTML'])

  const listWrapper = await waitForElement(() => getByTestId('ListWrapper'))
  const reposArray = within(listWrapper).getAllByTestId('RepoWrapper')

  expect(reposArray.length).toBe(1)
})

test('clear filter search works', async () => {
  const {getByPlaceholderText, getByTestId, getAllByTestId, getByText} = setup()
  const input = getByPlaceholderText('Search')
  const clearButton = getByText('Clear filters')

  fireEvent.change(input, {target: {value: 'react'}})

  const filterSelect = getByTestId('filter-select')

  userEvent.selectOptions(filterSelect, ['HTML'])

  const listWrapper = await waitForElement(() => getByTestId('ListWrapper'))

  expect(within(listWrapper).getAllByTestId('RepoWrapper').length).toBe(1)

  fireEvent.click(clearButton)

  expect(within(listWrapper).getAllByTestId('RepoWrapper').length).toBe(30)
  expect(getByPlaceholderText('Search')).toHaveValue('react')
})