import { breakpoints, mediaQueries } from './responsive'

import React from 'react'
import styled from 'styled-components'

type ColSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

interface IProps {
	mb?: number
	mt?: number
	xs?: ColSize
	sm?: ColSize
	md?: ColSize
	lg?: ColSize
	xl?: ColSize
}

const Style = styled('div')<IProps>`
	width: 100%;
	padding: 0 5px;
	display: flex;
	${({ mt }) => `margin-top: ${mt}px;`}
	${({ mb }) => `margin-bottom: ${mb}px;`}
  ${({ xs }) => xs && `${mediaQueries.up(breakpoints.xs)} {width: calc(${xs} / 12 * 100%);}`}
  ${({ sm }) => sm && `${mediaQueries.up(breakpoints.sm)} {width: calc(${sm} / 12 * 100%);}`}
  ${({ md }) => md && `${mediaQueries.up(breakpoints.md)} {width: calc(${md} / 12 * 100%);}`}
  ${({ lg }) => lg && `${mediaQueries.up(breakpoints.lg)} {width: calc(${lg} / 12 * 100%);}`}
  ${({ xl }) => xl && `${mediaQueries.up(breakpoints.xl)} {width: calc(${xl} / 12 * 100%);}`}
`

const Col: React.FC<IProps> = ({ children, mb = 0, mt = 0, xs, sm, md, lg, xl }) => {
	return (
		<Style xs={xs} sm={sm} md={md} lg={lg} xl={xl} mb={mb} mt={mt}>
			{children}
		</Style>
	)
}

export default Col
