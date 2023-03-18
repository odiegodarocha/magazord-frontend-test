import styled from 'styled-components'

export const MainWrapper = styled.div`
  max-width: 128rem;
  margin: 4rem auto;
  padding: 0 2.4rem;

  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  align-items: flex-start;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 20rem 1fr;
  }

  @media only screen and (min-width: 992px) {
    grid-template-columns: 33rem 1fr;
  }
`
