import styled from 'styled-components'
import ChampionList from '../components/ChampionList'
import FilterBar from '../components/FilterBar/FilterBar'

const Home = ({ championArray, search, setSearch }) => {
  return (
    <Wrapper>
      <FilterBar
        search={search}
        setSearch={setSearch}
        championArray={championArray}
      />
      {search}
      <ChampionList championArray={championArray} />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`

export default Home
