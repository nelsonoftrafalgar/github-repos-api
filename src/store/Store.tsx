import { FC, createContext, useContext, useEffect, useRef, useState } from 'react'
import { IRawData, IRepo, IStoreContext } from 'store/types'

import { SEARCH_REPOS } from 'config/queries'
import { extrackLanguages } from 'utils/extrackLanguages'
import { getRepoList } from 'utils/getRepoList'
import { parseData } from 'utils/parseData'
import { useLazyQuery } from '@apollo/client'

const StoreContext = createContext({} as IStoreContext)

const Store: FC = ({ children }) => {
	const [data, setData] = useState<IRepo[]>([])
	const [filter, setFilter] = useState('')
	const [languages, setLanguages] = useState<string[]>([])
	const [isEmptySearch, setIsEmptySearch] = useState(false)
	const [search, setSearch] = useState('')
	const initialRender = useRef(true)
	const [getRepos, { error, loading }] = useLazyQuery(SEARCH_REPOS, {
		onCompleted: (rawData: IRawData) => {
			if (rawData.search.edges.length === 0) setIsEmptySearch(true)
			else setIsEmptySearch(false)
			const parsedData = parseData(rawData)
			setLanguages(extrackLanguages(parsedData))
			setData(parsedData)
		},
	})

	useEffect(() => {
		if (loading) setData([])
	}, [loading])

	useEffect(() => {
		if (!initialRender.current) getRepos({ variables: { search } })
		initialRender.current = false
		setIsEmptySearch(false)
	}, [search, getRepos])

	const repoList = getRepoList(filter, data)

	return (
		<StoreContext.Provider
			value={{
				setFilter,
				filter,
				languages,
				repoList,
				loading,
				error,
				isEmptySearch,
				setSearch,
				search,
			}}
		>
			{children}
		</StoreContext.Provider>
	)
}

export default Store

export const useStore = () => useContext(StoreContext)
