import './Details.scss'

import LinkIcon from '../../assets/icons/link.svg'
import React from 'react'

const Details = () => {
  return (
    <div className='details-wrapper'>
      <h1 className='details-title'>Search Github repositories</h1>
      <div className='details-icon-container'>
        <div className='details-icon-wrapper'>
          <img src={LinkIcon} alt="link-icon" />
          <a className='details-link' href="http://github.com" target='_blank' rel='noopener noreferrer'>http://github.com</a>
        </div>
      </div>
    </div>
  )
}

export default Details
