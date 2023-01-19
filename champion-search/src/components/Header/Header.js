import styled from 'styled-components'

const Header = () => {
  return (
    <Heading>
      <H1>
        Choose Your
        <Span>Champion</Span>
      </H1>
    </Heading>
  )
}

const Heading = styled.header`
  text-align: center;
  margin: 64px 0px;
`
const H1 = styled.h1`
  font-size: 2rem;
  @media (max-width: 34.375rem) {
    font-size: 1.8rem;
  }
`
const Span = styled.span`
  font-size: 7rem;
  display: block;
  margin-top: -32px;
  @media (max-width: 68.75rem) {
    font-size: 5rem;
  }
  @media (max-width: 34.375rem) {
    font-size: 4rem;
    margin-top: -16px;
  }
`

export default Header
