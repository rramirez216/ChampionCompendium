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
        {/* <H2>Available Skins:</H2> */}
        {championSkins.map((skin) => (
          <IndividualSlide key={skin.id}>
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
`
const SwiperNavigation = styled(Swiper)`
  padding-top: 96px;
`
const IndividualSlide = styled(SwiperSlide)``

export default Slider
