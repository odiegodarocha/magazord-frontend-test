import emoji from '../../assets/sunglasses-emoji.svg'
import {
  Avatar,
  AvatarImage,
  LinkItem,
  UserActions,
  UserInfo,
  UserStatus,
} from './styles'

import { MapPin, LinkSimple, InstagramLogo } from 'phosphor-react'
import { useState } from 'react'

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const desktopDevice = window.innerWidth > 768

  return (
    <div>
      <Avatar>
        <AvatarImage src="http://github.com/odiegodarocha.png" alt="" />
        <UserStatus>
          <img src={emoji} alt="" />
        </UserStatus>
      </Avatar>
      <UserInfo>
        <strong>Diego da Rocha</strong>
        <span>Web Developer</span>
      </UserInfo>
      <UserActions>
        {desktopDevice === false ? (
          <button onClick={() => setIsOpen(!isOpen)}>
            Informações Adicionais
          </button>
        ) : null}
        {isOpen ? (
          <div>
            <LinkItem href="">
              <MapPin size={18} />
              Joinville, SC
            </LinkItem>
            <LinkItem
              href="https://www.linkedin.com/in/diegopablodarocha/"
              target="_blank"
            >
              <LinkSimple size={18} />
              Linkedin
            </LinkItem>
            <LinkItem
              href="https://instagram.com/odiegodarocha/"
              target="_blank"
            >
              <InstagramLogo size={18} />
              Odiegodarocha
            </LinkItem>
          </div>
        ) : null}
        {desktopDevice === true ? (
          <div>
            <LinkItem href="">
              <MapPin size={18} />
              Joinville, SC
            </LinkItem>
            <LinkItem
              href="https://www.linkedin.com/in/diegopablodarocha/"
              target="_blank"
            >
              <LinkSimple size={18} />
              Linkedin
            </LinkItem>
            <LinkItem
              href="https://instagram.com/odiegodarocha/"
              target="_blank"
            >
              <InstagramLogo size={18} />
              Odiegodarocha
            </LinkItem>
          </div>
        ) : null}
      </UserActions>
    </div>
  )
}
