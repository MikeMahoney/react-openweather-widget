import { ReactNode } from 'react'
import { NavListWrapper } from './NavListStyles'

interface INavList {
  children: ReactNode
}

const NavList: React.FC<INavList> = ({ children }) => {
  return <NavListWrapper>{children}</NavListWrapper>
}

export default NavList
