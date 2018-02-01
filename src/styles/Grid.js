import styled from 'styled-components'

export default styled.div`
  display: grid;
  grid-gap: 1em;
  width: 100%;
  margin: 1em;

  @media(min-width: 25em) {
    max-width: 35em;
    grid-template-columns: 1fr 1fr;
  }
`
