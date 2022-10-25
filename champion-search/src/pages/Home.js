import styled from 'styled-components'
import ChampionList from '../components/ChampionList'
import FilterBar from '../components/FilterBar/FilterBar'

const Home = ({ list }) => {
  return (
    <Wrapper>
      <FilterBar />
      <ChampionList list={list} />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`

export default Home
