import { FC } from 'react'
import { formatNumber } from 'utils/formatNumber'
import { icons } from 'utils/icons'
import styled from 'styled-components'

const Stat = styled.div`
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

const FooterStat: FC<IProps> = ({ type, count }) => {
	return (
		<Stat>
			<Icon src={icons[type]} alt={`${type} icon`} />
			<span>{formatNumber(count)}</span>
		</Stat>
	)
}

export default FooterStat
