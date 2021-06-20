import '@testing-library/jest-dom/extend-expect'

import { render, screen, waitFor } from '@testing-library/react'

import { ApolloProvider } from '@apollo/client'
import App from '../App'
import { client } from 'config/graphql'
import userEvent from '@testing-library/user-event'

const setup = () => {
	const utils = render(
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	)
	return utils
}

test('App renders correctly', () => {
	setup()
	expect(screen.getByTestId('title')).toBeInTheDocument()
	expect(screen.getByTestId('logo')).toBeInTheDocument()
	expect(screen.getByTestId('search-input')).toBeInTheDocument()
	expect(screen.getByTestId('clear-search-button')).toBeInTheDocument()
	expect(screen.getByTestId('filter-select')).toBeInTheDocument()
	expect(screen.getByTestId('clear-filter-button')).toBeInTheDocument()
})

test('Typing in input displays loading message', async () => {
	setup()
	userEvent.type(screen.getByTestId('search-input'), 'react')
	const loadingMessage = await screen.findByTestId('loading-message')
	expect(loadingMessage).toBeInTheDocument()
})

test('Typing in input returns repo list', async () => {
	setup()
	userEvent.type(screen.getByTestId('search-input'), 'react')
	const repoWrapper = await screen.findByTestId('repo-wrapper')
	expect(repoWrapper).toBeInTheDocument()
})

test('Searching for non existing repo should display empty search message', async () => {
	setup()
	userEvent.type(screen.getByTestId('search-input'), 'non existing repo')
	const emptySearch = await screen.findByTestId('empty-search')
	expect(emptySearch).toBeInTheDocument()
})

test('Clicking "Clear search" button should remove search results', async () => {
	setup()
	userEvent.type(screen.getByTestId('search-input'), 'react')
	const repoWrapper = await screen.findByTestId('repo-wrapper')
	expect(repoWrapper).toBeInTheDocument()
	userEvent.click(screen.getByTestId('clear-search-button'))
	await waitFor(() => {
		expect(screen.queryByTestId('repo-wrapper')).not.toBeInTheDocument()
	})
})

test('Selecting language should filter search results', async () => {
	setup()
	userEvent.type(screen.getByTestId('search-input'), 'multiple repos')
	const repoWrappers = await screen.findAllByTestId('repo-wrapper')
	expect(repoWrappers).toHaveLength(2)
	const filterSearchSelect = screen.getByTestId('filter-select')
	userEvent.selectOptions(filterSearchSelect, 'test primary language name 1')
	expect(screen.queryByText('test name 2')).not.toBeInTheDocument()
	userEvent.selectOptions(filterSearchSelect, 'test primary language name 2')
	expect(screen.queryByText('test name 1')).not.toBeInTheDocument()
	expect(screen.getByText('test name 2')).toBeInTheDocument()
})

test('Clicking "Clear filters" should reset search filters', async () => {
	setup()
	userEvent.type(screen.getByTestId('search-input'), 'multiple repos')
	const repoWrappers = await screen.findAllByTestId('repo-wrapper')
	expect(repoWrappers).toHaveLength(2)
	userEvent.selectOptions(screen.getByTestId('filter-select'), 'test primary language name 1')
	expect(screen.queryByText('test name 2')).not.toBeInTheDocument()
	userEvent.click(screen.getByTestId('clear-filter-button'))
	expect(screen.getByText('test name 1')).toBeInTheDocument()
	expect(screen.getByText('test name 2')).toBeInTheDocument()
})

test('Api error should display error message', async () => {
	setup()
	userEvent.type(screen.getByTestId('search-input'), 'error')
	const errorMessage = await screen.findByTestId('error-message')
	expect(errorMessage).toBeInTheDocument()
	expect(screen.getByText('api request error')).toBeInTheDocument()
})
