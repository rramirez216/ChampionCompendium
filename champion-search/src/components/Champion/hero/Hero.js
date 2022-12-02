import styled from 'styled-components'

const Hero = ({ championData: { name, id, title } }) => {
  console.log(name)
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
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${(props) => props.url}) no-repeat center fixed;
  background-size: cover;
`
const Heading = styled.h1``
const Span = styled.span``
const Strong = styled.strong``

export default Hero
