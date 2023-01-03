import styled from 'styled-components'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import Slide from './Slide'

const AvailableSkins = ({ championSkins, championId }) => {
  return (
    <Wrapper>
      <H2>Available Skins</H2>
      <SwiperWrapper>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          navigation
        >
          {championSkins.map((skin) => (
            <SwiperSlide>
              <Slide key={skin.id} championId={championId} skin={skin} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  /* width: 100%;
  height: 100%; */
  background-color: hsl(40 100% 99%);
`
const H2 = styled.h2`
  width: max-content;
  font-size: 2.5rem;
`
const SwiperWrapper = styled.div``

export default AvailableSkins
