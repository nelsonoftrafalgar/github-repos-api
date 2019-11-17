import { IFooterStatProps } from '../../utils/config'
import React from 'react'
import { getIcon } from '../../utils/getIcon'
import styled from 'styled-components'

const Stat = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
`

const Icon = styled.img`
  margin-right: 5px;
`

const FooterStat: React.FC<IFooterStatProps> = ({ type, count }) => {
  return (
    <Stat>
      <Icon src={getIcon(type)} alt={`${type} icon`} />
      <span>{count}</span>
    </Stat>
  )
}

export default React.memo(FooterStat)
