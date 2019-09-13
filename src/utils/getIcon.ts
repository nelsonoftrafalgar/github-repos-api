import { Icon } from '../components/Repo/FooterStat'
import IssuesIcon from '../assets/icons/issues.svg'
import StarsIcon from '../assets/icons/stars.svg'
import VisitorsIcon from '../assets/icons/visitors.svg'

export const getIcon = (icon: Icon) => {
  switch (icon) {
    case 'stars':
      return StarsIcon
    case 'visitors':
      return VisitorsIcon
    case 'issues':
      return IssuesIcon
  }
}