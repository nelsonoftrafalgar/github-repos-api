import { FC } from 'react'
import styled from 'styled-components'

const Style = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
`

const Row: FC = ({ children }) => {
	return <Style>{children}</Style>
}

export default Row
