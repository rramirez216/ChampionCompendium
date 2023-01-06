import styled from 'styled-components'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import Slide from './Slide'

const Slider = ({ championSkins, championId }) => {
  return (
    <Wrapper>
      <SwiperNavigation modules={[Navigation]} slidesPerView={1} navigation>
        {championSkins.map((skin) => (
          <IndividualSlide>
            <Slide key={skin.id} championId={championId} skin={skin} />
          </IndividualSlide>
        ))}
      </SwiperNavigation>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-top: -64px;
`
const SwiperNavigation = styled(Swiper)``
const IndividualSlide = styled(SwiperSlide)``

export default Slider
