import styled from 'styled-components'
import ChampionInfo from '../ChampionInfo/ChampionInfo'

const Hero = ({
  championData: {
    name,
    id,
    title,
    lore,
    tags,
    info: { difficulty },
  },
}) => {
  return (
    <Wrapper>
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
  justify-content: flex-start;
  align-items: center;
  color: hsl(0, 0%, 90%);
`
const InnerWrapper = styled.div`
  /* width: 33.33%; */
  display: flex;
  flex-flow: column;
  align-items: center;
`
const Heading = styled.h1`
  margin-bottom: 32px;
`
const Span = styled.span`
  font-size: 2rem;
`
const Strong = styled.strong`
  font-size: 5rem;
`

export default Hero
