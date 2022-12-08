import styled from 'styled-components'

const Hero = ({ championData: { name, id, title } }) => {
  return (
    <Wrapper
      url={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`}
    >
      <Heading>
        <Span>{title}</Span>
        <br />
        <Strong>{name}</Strong>
      </Heading>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  /* width: 100%;
  height: 100%; */
  flex: 100% 1 0;

  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${(props) => props.url}) no-repeat center;
  background-size: cover;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`
const Heading = styled.h1`
  color: hsl(0, 0%, 100%);
  margin-left: 96px;
  margin-bottom: 96px;
`
const Span = styled.span`
  font-size: 2rem;
`
const Strong = styled.strong`
  font-size: 5.5rem;
`

export default Hero
