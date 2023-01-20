import styled from 'styled-components'
import Search from './Search'
import DropDown from './DropDown'
import Tags from './Tags'
import constants from '../../data/constants'
import Difficulty from './Difficulty'

const FilterBar = ({
  search,
  championArray,
  handleSearch,
  setSelected,
  setSearch,
  setTag,
  difficulty,
  setDifficulty,
  tag,
}) => {
  return (
    <Bar>
      <DropDown
        list={championArray}
        setSelected={setSelected}
        setSearch={setSearch}
        variant={'search'}
      >
        <Search
          search={search}
          handleSearch={handleSearch}
          setSelected={setSelected}
          setSearch={setSearch}
        />
      </DropDown>
      <Tags setTag={setTag} tag={tag} />
      <DropDown
        list={constants.difficulty}
        setDifficulty={setDifficulty}
        variant={'difficulty'}
      >
        <Difficulty difficulty={difficulty} setDifficulty={setDifficulty} />
      </DropDown>
    </Bar>
  )
}

const Bar = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 16px 32px;
  margin: 0 0 64px;
  font-size: 1.2rem;
  @media (max-width: 34.375rem) {
    padding: 8px 16px;
    font-size: 1.1rem;
  }
  @media (max-width: 22.5rem) {
    padding: 4px 8px;
  }
`

export default FilterBar
