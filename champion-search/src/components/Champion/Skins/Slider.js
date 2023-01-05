import styled from 'styled-components'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import Slide from './Slide'

const Slider = ({ championSkins, championId }) => {
  return (
    <>
      <SwiperNavigation modules={[Navigation]} slidesPerView={1} navigation>
        {championSkins.map((skin) => (
          <IndividualSlide>
            <Slide key={skin.id} championId={championId} skin={skin} />
          </IndividualSlide>
        ))}
      </SwiperNavigation>
    </>
  )
}

// const Wrapper = styled.section`
//   /* width: 100%;
//   height: 100%; */
// `
const SwiperNavigation = styled(Swiper)`
  /* border: 3px solid red; */
`
const IndividualSlide = styled(SwiperSlide)`
  /* border: 3px solid red; */
`

export default Slider
