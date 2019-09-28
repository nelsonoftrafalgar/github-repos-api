import React, { useContext } from 'react'

import Repo from '../components/Repo/Repo'
import { context } from '../context/context'
import styled from 'styled-components'

const ListWrapper = styled.div`
  margin: 10px 0 50px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const List = () => {
  const { filter, list } = useContext(context)
  
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
    <ListWrapper>
      {repos}
    </ListWrapper>
  )
}

export default List