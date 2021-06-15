import { IRepo } from 'store/types'

export const extrackLanguages = (data: IRepo[]) => {
	return data.reduce((acc: string[], item) => {
		return item.language && !acc.includes(item.language.name) ? [...acc, item.language.name] : acc
	}, [])
}
