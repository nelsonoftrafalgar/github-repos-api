import './Details.scss'

import LinkIcon from '../../assets/icons/link.svg'
import LocationIcon from '../../assets/icons/location.svg'
import React from 'react'

const Details = () => {
  return (
    <div className='details-wrapper'>
      <h1 className='details-title'>App'n'roll's repositories</h1>
      <p className='details-subtitle'>We rock IT!</p>
      <div className='details-icon-container'>
        <div className='details-icon-wrapper'>
          <img src={LocationIcon} alt="location-icon" />
          <span className='details-location'>Warsaw, PL</span>
        </div>
        <div className='details-icon-wrapper'>
          <img src={LinkIcon} alt="link-icon" />
          <a className='details-link' href="http://appnroll.com">http://appnroll.com</a>
        </div>
      </div>
    </div>
  )
}

export default Details
