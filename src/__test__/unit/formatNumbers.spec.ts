import { formatNumber } from 'utils/formatNumber'

test('it formats numbers and adds prefix', () => {
	expect(formatNumber(-1)).toEqual(-1)
	expect(formatNumber(0)).toEqual(0)
	expect(formatNumber(100)).toEqual(100)
	expect(formatNumber(999)).toEqual(999)
	expect(formatNumber(1000)).toEqual('1K')
	expect(formatNumber(21100)).toEqual('21.1K')
	expect(formatNumber(35230)).toEqual('35.2K')
	expect(formatNumber(1000000)).toEqual('1M')
	expect(formatNumber(2110000)).toEqual('2.1M')
	expect(formatNumber(3523000)).toEqual('3.5M')
})
