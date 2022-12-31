import styled from 'styled-components'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
// import Slide from './Slide'

const AvailableSkins = ({ championSkins, championId }) => {
  return (
    <Wrapper>
      <h1>Available Skins:</h1>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        navigation
        scrollbar={{ draggable: true }}
      >
        {championSkins.map((skin) => (
          <SwiperSlide>
            <img
              src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_${skin.num}.jpg`}
              alt={skin.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  background-color: hsl(0 0% 100%);
  color: hsl(0 0% 10%);
  font-size: 4rem;
  /* display: flex;
  flex-flow: column;
  justify-content: center; */
`

export default AvailableSkins
