import { FC, createContext, useContext, useState } from 'react'

import { SEARCH_REPOS } from 'config/queries'
import { useQuery } from '@apollo/client'

const StoreContext = createContext({} as any)

const Store: FC = ({ children }) => {
	const [search, setSearch] = useState('react')

	const { error, loading, data } = useQuery(SEARCH_REPOS, { variables: { search } })

	console.log('error', error, 'data', data, 'loading', loading)

	return <div>{children}</div>
}

export default Store

export const useStore = () => useContext(StoreContext)
