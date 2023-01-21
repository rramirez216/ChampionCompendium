import styled from 'styled-components'

const Slide = ({ championId, skin }) => {
  return (
    <Wrapper>
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_${skin.num}.jpg`}
        alt={skin.name}
      />
      <H3>
        <Name>
          {skin.name}
          <Underline></Underline>
        </Name>
      </H3>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  place-content: center;
`
const H3 = styled.h3`
  text-align: center;
  font-size: 2.2rem;
  margin-top: 32px;
`
const Name = styled.span`
  display: inline-block;
  width: max-content;
`
const Underline = styled.span`
  display: block;
  width: 100%;
  border: 1px solid hsl(40 53% 58%);
`
export default Slide
