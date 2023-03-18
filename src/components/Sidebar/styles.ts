import styled from 'styled-components'

export const Avatar = styled.div`
  border-radius: 50%;
  width: 15rem;
  height: 15rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  box-shadow: inset 0px 0px 16px rgba(0, 0, 0, 0.7);
  position: relative;
`

export const AvatarImage = styled.img`
  border-radius: 50%;
  max-width: 100%;
`

export const UserStatus = styled.div`
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  padding: 1.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.white};
  box-shadow: 0px 0px 16px rgba(79, 79, 80, 0.15);
  position: absolute;
  right: 0;
  bottom: 0;
`

export const UserStatusEmoji = styled.img`
  border-radius: 50%;
  width: 1.8rem;
  height: 1.8rem;
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.4rem;

  strong {
    font-size: 2.4rem;
    color: ${(props) => props.theme['gray-900']};
  }

  span {
    font-size: 1.6rem;
    margin-top: 0.4rem;
  }
`

export const UserActions = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.6rem;

  div {
    padding-left: 2.5rem;
  }

  button {
    color: ${(props) => props.theme['blue-100']};
    background-color: transparent;
    border: 0;
    cursor: pointer;
    position: relative;
    padding-bottom: 15px;

    &:before {
      content: '';
      width: 8px;
      height: 8px;
      background-color: transparent;
      border-right: 2px solid ${(props) => props.theme['blue-100']};
      border-top: 2px solid ${(props) => props.theme['blue-100']};
      transform: rotate(135deg);
      margin-right: 1.3rem;
      margin-top: -2px;
      display: block;
      position: absolute;
      bottom: 0;
      left: 50%;
      margin-left: -10px;
    }
  }
`

export const LinkItem = styled.a`
  color: ${(props) => props.theme['blue-100']};
  text-decoration: none;
  display: flex;
  align-items: center;
  border-radius: 2px;
  margin-top: 1.6rem;
  transition: 0.2s;

  svg {
    margin-right: 1.2rem;
  }

  &:hover {
    color: ${(props) => props.theme['blue-300']};
    text-decoration: underline;
  }
`
