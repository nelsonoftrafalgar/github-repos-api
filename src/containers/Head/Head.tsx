import './Head.scss'

import Details from '../../components/Details/Details';
import Logo from '../../components/Logo/Logo'
import React from 'react'

const Head = () => {
  return (
    <div className='head-wrapper'>
      <Logo />
      <Details />
    </div>
  )
}

export default Head