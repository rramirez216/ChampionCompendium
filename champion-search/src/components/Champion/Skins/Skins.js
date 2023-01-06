import styled from 'styled-components'
import Slider from './Slider'

const Skins = ({ championSkins, championId }) => {
  return (
    <Wrapper>
      <H2>Available Skins</H2>
      <Slider championSkins={championSkins} championId={championId} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  background-color: hsl(40 100% 99%);
  padding-top: 32px;
  overflow: hidden;
`
const H2 = styled.h2`
  font-size: 2.5rem;
  text-align: center;
`

export default Skins
