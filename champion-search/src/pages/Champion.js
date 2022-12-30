import styled from 'styled-components'
import Hero from '../components/Champion/hero/Hero'
import AvailableSkins from '../components/Champion/AvailableSkins/AvailableSkins'

const Champion = ({ championData }) => {
  let backgroundImg
  if (championData) {
    backgroundImg = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championData.id}_0.jpg`
    console.log(championData.skins)
  }

  return (
    <Wrapper url={backgroundImg}>
      {championData ? <Hero championData={championData} /> : 'no champion Data'}
      {championData ? (
        <AvailableSkins
          championSkins={championData.skins}
          championId={championData.id}
        />
      ) : (
        'no champion Data'
      )}
    </Wrapper>
  )
}

const Wrapper = styled.main`
  width: 100%;
  height: 100%;

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
  overflow-y: scroll;
`

export default Champion
