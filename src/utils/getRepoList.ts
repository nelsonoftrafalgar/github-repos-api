import { IRepo } from 'store/types'

export const getRepoList = (filter: string, data: IRepo[]) => {
	return filter ? data.filter((item) => item.language?.name === filter) : data
}
