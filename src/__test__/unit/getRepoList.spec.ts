import { getRepoList } from 'utils/getRepoList'
import { repoData } from './mockData'

test('it filters repos based on language', () => {
	expect(getRepoList('test primary language name 2', repoData)).toMatchObject([repoData[1]])
	expect(getRepoList('test primary language name 1', repoData)).toMatchObject([repoData[0]])
})

test('it returns original data when empty string is passed', () => {
	expect(getRepoList('', repoData)).toMatchObject(repoData)
})
