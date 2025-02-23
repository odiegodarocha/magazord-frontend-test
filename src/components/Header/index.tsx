import { HeaderContainer, HeaderContent } from './styles'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />
        <span>/</span>
        <span>Profile</span>
      </HeaderContent>
    </HeaderContainer>
  )
}
