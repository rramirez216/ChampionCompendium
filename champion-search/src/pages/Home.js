import styled from 'styled-components'
import ChampionList from '../components/ChampionList'
import FilterBar from '../components/FilterBar/FilterBar'

const Home = ({
  championArray,
  handleSearch,
  search,
  selected,
  setSelected,
  setSearch,
}) => {
  let filteredInput
  let selectedChampion
  search
    ? (filteredInput = championArray.filter((value) =>
        value.name.toLowerCase().includes(search)
      ))
    : (filteredInput = championArray)

  selected
    ? (selectedChampion = championArray.filter(
        (value) => value.name === selected
      ))
    : (selectedChampion = championArray)

  return (
    <Wrapper>
      <FilterBar
        search={search}
        championArray={filteredInput}
        handleSearch={handleSearch}
        setSelected={setSelected}
        setSearch={setSearch}
      />
      <ChampionList championArray={selectedChampion} />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`

export default Home
