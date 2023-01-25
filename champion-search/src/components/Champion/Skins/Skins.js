import styled from 'styled-components'
import Slider from './Slider'

const Skins = ({ championSkins, championId }) => {
  return (
    <Wrapper>
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
  overflow-y: scroll;
`

export default Skins
