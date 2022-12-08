import styled from 'styled-components'
import ChampionInfo from '../components/Champion/ChampionInfo/ChampionInfo'
import Hero from '../components/Champion/hero/Hero'
import Abilities from '../components/Champion/abilities/Abilities'

const Champion = ({ championData }) => {
  return (
    <Wrapper>
      {championData ? <Hero championData={championData} /> : 'no champion Data'}
      {championData ? (
        <ChampionInfo championData={championData} />
      ) : (
        'no champion Info'
      )}
      {championData ? (
        <Abilities championData={championData} />
      ) : (
        'no champion Info'
      )}
    </Wrapper>
  )
}

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  /* align-items: center; */
`

export default Champion
