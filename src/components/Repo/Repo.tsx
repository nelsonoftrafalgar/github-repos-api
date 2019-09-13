import './Repo.scss'

import React, { useContext } from 'react'

import FooterStat from './FooterStat'
import { IRepoTile } from '../../utils/useFetch'
import RepoLinkIcon from '../../assets/icons/external_link.svg'
import { colors } from '../../utils/colors'
import { context } from '../../context/context'

const Repo: React.FC<IRepoTile> = ({
  fullName,
  stargazersCount,
  forksCount,
  htmlUrl,
  language,
  name,
  description,
  watchersCount,
  isAdded
}) => {

  const { handleToggleAdd } = useContext(context)
  return (
    <div className='repo-wrapper' style={{ borderTopColor: colors[language] }}>
      <div className='repo-inner-container'>
        <div className='repo-title-wrapper'>
          <h2 className='repo-title'>{name}</h2>
          <button onClick={handleToggleAdd(name, isAdded)} className='repo-add-btn'>{isAdded ? 'v' : '+'}</button>
        </div>
        <div className='repo-link-wrapper'>
          <img className='repo-link-icon' src={RepoLinkIcon} alt="repo link icon" />
          <a className='repo-link' target='_blank' rel="noopener noreferrer" href={htmlUrl}>{fullName}</a>
        </div>
        <p className='repo-description'>{description}</p>
      </div>
      <div className='repo-footer'>
        <div className='repo-footer-language'>
          <div style={{ backgroundColor: colors[language] }} />
          <span>{language}</span>
        </div>
        <FooterStat count={stargazersCount} type='stars' />
        <FooterStat count={watchersCount} type='visitors' />
        <FooterStat count={forksCount} type='issues' />
      </div>
    </div>
  )
}

export default Repo