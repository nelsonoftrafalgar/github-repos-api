import React from 'react'
import { getIcon } from '../../utils/getIcon'

export type Icon = 'stars' | 'issues' | 'visitors'

interface IFooterStatProps {
  type: Icon
  count: number
}

const FooterStat: React.FC<IFooterStatProps> = ({ type, count }) => {
  return (
    <div className='repo-footer-stat'>
      <img className='repo-footer-icon' src={getIcon(type)} alt={`${type} icon`} />
      <span>{count}</span>
    </div>
  )
}

export default FooterStat
