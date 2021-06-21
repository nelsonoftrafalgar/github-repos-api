import { rawData, repoData } from './mockData'

import { parseData } from 'utils/parseData'

test('it parses raw data into repo array', () => {
	expect(parseData(rawData)).toMatchObject(repoData)
})
