import styled from 'styled-components'
import ChampionInfo from '../components/Champion/ChampionInfo/ChampionInfo'

const Champion = ({ championData }) => {
  // let { currentChampion: champion } = championData
  return (
    <Wrapper>
      {championData ? (
        <ChampionInfo championData={championData} />
      ) : (
        'Champion Data not found'
      )}
    </Wrapper>
  )
}

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`

export default Champion
