import { extrackLanguages } from 'utils/extrackLanguages'
import { repoData } from './mockData'

test('it extracts languages from parsed data', () => {
	expect(extrackLanguages(repoData)).toMatchObject([
		'test primary language name 1',
		'test primary language name 2',
	])
})
