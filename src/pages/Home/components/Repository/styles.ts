import styled from 'styled-components'

export const Article = styled.a`
  display: block;
  margin: 4.5rem 0 2rem;
  text-decoration: none;

  @media only screen and (min-width: 768px) {
    margin: 2.5rem 0 0 -2rem;
    padding: 2rem;
    transition: 0.2s;

    &:hover {
      box-shadow: 0px 0px 16px rgba(79, 79, 80, 0.15);
    }
  }
`

export const Header = styled.header`
  h3 {
    font-size: 1.8rem;
    font-weight: 300;
    color: ${(props) => props.theme.black};
    margin-bottom: 0.9rem;

    span {
      &:first-child {
        &:after {
          content: ' / ';
        }
      }
      &:last-child {
        color: ${(props) => props.theme['blue-100']};
        font-weight: 700;
      }
    }
  }
`

export const Content = styled.div`
  color: ${(props) => props.theme['gray-300']};
  margin-bottom: 0.8rem;
`

export const Footer = styled.footer`
  max-width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: ${(props) => props.theme.black};
  }
`
