import './Repo.scss'

import IssuesIcon from '../../assets/icons/issues.svg'
import React from 'react'
import RepoLinkIcon from '../../assets/icons/external_link.svg'
import StarsIcon from '../../assets/icons/stars.svg'
import VisitorsIcon from '../../assets/icons/visitors.svg'

const Repo = () => {
  return (
    <div className='repo-wrapper'>
      <div className='repo-inner-container'>
        <div className='repo-title-wrapper'>
          <h2 className='repo-title'>box_android</h2>
          <button className='repo-add-btn'>+</button>
        </div>
        <div className='repo-link-wrapper'>
          <img className='repo-link-icon' src={RepoLinkIcon} alt="repo link icon" />
          <a className='repo-link' href="">Appnroll/box_android</a>
        </div>
        <p className='repo-description'>Building block for spree social networking features provides authentication and account linkage</p>
      </div>
      <div className='repo-footer'>
        <div className='repo-footer-language'>
          <div></div>
          <span>Shell</span>
        </div>
        <div className='repo-footer-stat'>
          <img className='repo-footer-icon' src={StarsIcon} alt="stars icon" />
          <span>222</span>
        </div>
        <div className='repo-footer-stat'>
          <img className='repo-footer-icon' src={VisitorsIcon} alt="visitors icon" />
          <span>111</span>
        </div>
        <div className='repo-footer-stat'>
          <img className='repo-footer-icon' src={IssuesIcon} alt="issues icon" />
          <span>333</span>
        </div>
      </div>
    </div>
  )
}

export default Repo