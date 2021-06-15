import React from 'react'
import { icons } from 'utils/icons'
import styled from 'styled-components'

const Stat = styled.div`
	margin-left: 20px;
	display: flex;
	align-items: center;
`

const Icon = styled.img`
	margin-right: 5px;
`

interface IProps {
	type: 'stars' | 'issues' | 'visitors'
	count: number
}

const FooterStat: React.FC<IProps> = ({ type, count }) => {
	return (
		<Stat>
			<Icon src={icons[type]} alt={`${type} icon`} />
			<span>{count}</span>
		</Stat>
	)
}

export default React.memo(FooterStat)
