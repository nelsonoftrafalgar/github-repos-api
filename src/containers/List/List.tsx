import './List.scss'

import React, { useContext } from 'react'

import Repo from '../../components/Repo/Repo'
import { context } from '../../context/context'

const List = () => {
  const { list, filter } = useContext(context)

  const repos = list.map((repo) => {
    if (!filter) {
      return <Repo key={repo.id} {...repo} />
    } else if (filter && repo.language && repo.language.name === filter) {
      return <Repo key={repo.id} {...repo} />
    } else {
      return null
    }
  })

  return (
    <div className='list-wrapper'>
      {repos}
    </div>
  )
}

export default React.memo(List)