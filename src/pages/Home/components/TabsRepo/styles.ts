import styled from 'styled-components'
import * as Tabs from '@radix-ui/react-tabs'

export const TabsList = styled(Tabs.List)`
  font-size: 1.6rem;
  display: flex;
  @media only screen and (min-width: 992px) {
    font-size: 1.8rem;
  }
`

export const TabsTrigger = styled(Tabs.Trigger)`
  color: ${(props) => props.theme['gray-300']};
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-right: 4rem;
  padding: 0.8rem 0;
  border-bottom: 2px solid transparent;
  transition: 0.2s;
  @media only screen and (min-width: 992px) {
    margin-right: 6.7rem;
  }

  svg {
    margin-right: 1rem;
  }

  &[data-state='active'] {
    color: ${(props) => props.theme.black};
    border-bottom: 2px solid ${(props) => props.theme['orange-300']};
  }
`

export const Badge = styled.span`
  font-size: 1.4rem;
  color: ${(props) => props.theme['gray-300']};
  width: max-content;
  height: 2.4rem;
  border: 1px solid ${(props) => props.theme['gray-200']};
  background: ${(props) => props.theme['gray-100']};
  padding: 0.4rem 1.2rem;
  border-radius: 50px;
  margin-left: 0.8rem;
`
