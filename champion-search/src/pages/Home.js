import styled from 'styled-components'
import ChampionList from '../components/ChampionList'
import FilterBar from '../components/FilterBar/FilterBar'

const Home = ({ result, search, setSearch }) => {
  return (
    <Wrapper>
      <FilterBar search={search} setSearch={setSearch} />
      {search}
      <ChampionList result={result} />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`

export default Home
