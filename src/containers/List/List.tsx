import './List.scss'

import React from 'react'
import Repo from '../../components/Repo/Repo'

const List = () => {
  return (
    <div className='list-wrapper'>
      <Repo />
      <Repo />
      <Repo />
      <Repo />
      <Repo />
      <Repo />
    </div>
  )
}

export default List