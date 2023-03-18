import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme['gray-800']};
  padding: 2.1rem 0;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 128rem;
  margin: 0 auto;
  padding: 0 2.4rem;
  display: flex;
  align-items: center;

  span {
    font-size: 2.4rem;
    margin-left: 2.2rem;
    color: ${(props) => props.theme.white};

    &:last-child {
      font-size: 1.6rem;
      margin-left: 2.2rem;
    }
  }
`
