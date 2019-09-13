import './List.scss'

import React, { useContext } from 'react'

import Repo from '../../components/Repo/Repo'
import { context } from '../../context/context'

const List = () => {
  const { list, filter, name } = useContext(context)

  const repos = list.map((item) => {

    if (!name && !filter) {
      return <Repo key={item.id} {...item} />
    } else {
      if (name && item.name.includes(name)) {
        return <Repo key={item.id} {...item} />
      } else if (filter && item.language === filter) {
        return <Repo key={item.id} {...item} />
      } else {
        return null
      }
    }
  })

  return (
    <div className='list-wrapper'>
      {repos}
    </div>
  )
}

export default List