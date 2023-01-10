import styled from 'styled-components'

const Header = () => {
  return (
    <Heading>
      <H1>
        Choose Your
        <br />
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
  font-size: 2.5rem;
`
const Span = styled.span`
  font-size: 5rem;
`

export default Header
