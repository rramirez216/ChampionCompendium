import styled from 'styled-components'
import ChampionList from '../components/ChampionList'
import FilterBar from '../components/FilterBar/FilterBar'

const Home = ({ championArray, setSearch, handleSearch, search }) => {
  let answer
  if (search) {
    answer = championArray.filter((value) =>
      value.name.toLowerCase().includes(search)
    )
  } else {
    answer = championArray
  }
  return (
    <Wrapper>
      <FilterBar
        setSearch={setSearch}
        championArray={answer}
        handleSearch={handleSearch}
      />
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
