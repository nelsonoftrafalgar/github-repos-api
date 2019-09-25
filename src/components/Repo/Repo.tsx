import './Repo.scss'

import FooterStat from './FooterStat'
import { IRepoTile } from '../../App'
import React from 'react'
import RepoLinkIcon from '../../assets/icons/external_link.svg'

const Repo: React.FC<IRepoTile> = ({
  fullName,
  stargazersCount,
  forksCount,
  htmlUrl,
  language,
  name,
  description,
  watchersCount,
}) => {

  const color = `${language ? language.color : ''}`

  return (
    <div className='repo-wrapper' style={{ borderTopColor: color }} >
      <div className='repo-inner-container'>
        <div className='repo-title-wrapper'>
          <h2 className='repo-title'>{name}</h2>
        </div>
        <div className='repo-link-wrapper'>
          <img className='repo-link-icon' src={RepoLinkIcon} alt="repo link icon" />
          <a className='repo-link' target='_blank' rel="noopener noreferrer" href={htmlUrl}>{fullName}</a>
        </div>
        <p className='repo-description'>{description}</p>
      </div>
      <div className='repo-footer'>
        <div className='repo-footer-language'>
          <div style={{ backgroundColor: color }} />
          <span>{language ? language.name : ''}</span>
        </div>
        <FooterStat count={stargazersCount} type='stars' />
        <FooterStat count={watchersCount} type='visitors' />
        <FooterStat count={forksCount} type='issues' />
      </div>
    </div>
  )
}

export default Repo