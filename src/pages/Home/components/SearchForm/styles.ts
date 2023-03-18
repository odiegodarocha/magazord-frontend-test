import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as Checkbox from '@radix-ui/react-checkbox'
import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  align-items: center;
  position: relative;
  margin-top: 5rem;
  background-color: ${(props) => props.theme['gray-100']};
  padding: 1.2rem 0.8rem;
  border-radius: 8px;
  @media only screen and (min-width: 768px) {
    background-color: transparent;
    flex-direction: row-reverse;

    &:after {
      content: '';
      height: 1px;
      width: 100%;
      max-width: 444px;
      background-color: ${(props) => props.theme['gray-400']};
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
  @media only screen and (min-width: 992px) {
    flex-direction: row-reverse;
  }

  svg {
    color: ${(props) => props.theme['blue-100']};
    @media only screen and (min-width: 768px) {
      color: ${(props) => props.theme['gray-300']};
    }
  }

  input {
    font-size: 1.8rem;
    flex: 1;
    border: 0;
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem 0.6rem;
    background-color: ${(props) => props.theme['gray-100']};
    width: 100%;

    @media only screen and (min-width: 768px) {
      background-color: transparent;
    }

    &::placeholder {
      color: transparent;

      @media only screen and (min-width: 768px) {
        color: ${(props) => props.theme['gray-300']};
      }
    }

    &:focus-visible {
      outline: 0;
    }
  }
`

export const MenuBlock = styled.div`
  display: flex;
  gap: 0.8rem;
`

export const DropdownMenuContent = styled(DropdownMenu.Content)`
  min-width: 220px;
  background-color: ${(props) => props.theme.white};
  border-radius: 6px;
  padding: 5px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
  margin: 1rem;
  padding: 1.6rem 1.8rem;
`

export const DropdownMenuTrigger = styled(DropdownMenu.Trigger)`
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: ${(props) => props.theme.white};
  height: 32px;
  border-radius: 42px;
  padding: 8px 24px 8px 16px;
  background: linear-gradient(
    89.89deg,
    ${(props) => props.theme['blue-200']} -30.01%,
    ${(props) => props.theme['blue-100']} 125.65%
  );
  border: 0;
  line-height: 0;
  display: flex;
  align-items: center;
  &:focus {
    color: ${(props) => props.theme.white};
  }
  &:focus-visible {
    outline: 0;
  }
  &:before {
    content: '';
    width: 6px;
    height: 6px;
    background-color: transparent;
    border-right: 2px solid ${(props) => props.theme.white};
    border-top: 2px solid ${(props) => props.theme.white};
    transform: rotate(135deg);
    margin-right: 1.3rem;
    margin-top: -2px;

    @media only screen and (min-width: 768px) {
      width: 10px;
      height: 10px;
    }
  }
  @media only screen and (min-width: 768px) {
    font-size: 1.8rem;
    height: 40px;
  }
`

export const CheckboxBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2.4rem;

  &:last-child {
    margin-bottom: 0;
  }
`

export const CheckboxRoot = styled(Checkbox.Root)`
  background-color: white;
  width: 20px;
  height: 20px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme['gray-500']};
`

export const CheckboxLabel = styled.label`
  color: ${(props) => props.theme.black};
  padding-left: 1.6rem;
  font-size: 1.6rem;
  line-height: 1.8rem;
`
