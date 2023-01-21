import styled from 'styled-components'
import ChampionInfo from '../ChampionInfo/ChampionInfo'

const Hero = ({
  championData: {
    name,
    title,
    lore,
    tags,
    id,
    info: { difficulty },
  },
}) => {
  let backgroundImg
  if (name) {
    backgroundImg = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`
  }
  return (
    <Wrapper url={backgroundImg}>
      <InnerWrapper>
        <Heading>
          <Span>{title}</Span>
          <br />
          <Strong>{name}</Strong>
        </Heading>
        <ChampionInfo
          lore={lore}
          role={tags[0]}
          difficultyNumber={difficulty}
        />
      </InnerWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  /* flex: 100% 1 0; */
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  color: hsl(0, 0%, 90%);
  background: linear-gradient(
      to right,
      hsl(0 0% 0% / 0.9),
      hsl(0 0% 0% / 0.8),
      hsl(0 0% 0% / 0.3),
      hsl(0 0% 0% / 0.2)
    ),
    url(${(props) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  @media (max-width: 68.75rem) {
    background: linear-gradient(
        to right,
        hsl(0 0% 0% / 0.9),
        hsl(0 0% 0% / 0.7),
        hsl(0 0% 0% / 0.3)
      ),
      url(${(props) => props.url});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: scroll;
  }
  @media (max-width: 34.375rem) {
  }
`
const InnerWrapper = styled.div`
  max-width: 33.33%;
  min-width: 390px;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  margin-left: 10%;
`
const Heading = styled.h1`
  margin-bottom: 32px;
`
const Span = styled.span`
  font-size: 1.8rem;
`
const Strong = styled.strong`
  font-size: 5rem;
`

export default Hero
