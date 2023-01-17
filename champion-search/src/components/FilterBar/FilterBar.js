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
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 16px 32px;
  /* margin: 64px 0; */
  font-size: 1.2rem;
`

export default FilterBar
