import styled from 'styled-components'
import ChampionInfo from '../ChampionInfo/ChampionInfo'

const Hero = ({ championData: { name, id, title, lore } }) => {
  return (
    <Wrapper>
      <Heading>
        <Span>{title}</Span>
        <br />
        <Strong>{name}</Strong>
      </Heading>
      <ChampionInfo lore={lore} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  /* flex: 100% 1 0; */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  color: hsl(0, 0%, 100%);
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
