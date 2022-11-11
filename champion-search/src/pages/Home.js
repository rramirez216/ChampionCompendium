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
  tag,
  setTag,
  difficulty,
  setDifficulty,
}) => {
  let filteredInput
  let selectedChampion
  // filters the drop down in the search bar
  search
    ? (filteredInput = championArray.filter((value) =>
        value.name.toLowerCase().includes(search)
      ))
    : (filteredInput = championArray)
  // this will filter the list of champions whether a champ was selected in the search bar or a tag was selected
  selected
    ? (selectedChampion = championArray.filter(
        (value) => value.name === selected
      ))
    : tag !== 'All'
    ? (selectedChampion = championArray.filter((value) =>
        value.tags.includes(tag)
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
        setTag={setTag}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
      />
      {difficulty}
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
