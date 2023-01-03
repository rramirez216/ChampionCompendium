import styled from 'styled-components'
import { SwiperSlide } from 'swiper/react'

const Slide = ({ championId, skin }) => {
  return (
    <Wrapper>
      <img
        src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_${skin.num}.jpg`}
        alt={skin.name}
      />
      <H3>
        {skin.name}
        <Underline></Underline>
      </H3>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  place-content: center;
`
const H3 = styled.h3`
  width: max-content;
  font-size: 2.2rem;
  position: relative;
  left: 40%;
  margin-top: 32px;
`
const Underline = styled.span`
  display: block;
  width: 100%;
  border: 1px solid hsl(40 53% 58%);
`
export default Slide
