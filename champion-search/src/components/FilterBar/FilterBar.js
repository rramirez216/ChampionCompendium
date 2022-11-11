import styled from 'styled-components'
import Search from './Search'
import DropDown from './DropDown'
import Tags from './Tags'
import constants from '../../data/constants'

const FilterBar = ({
  search,
  championArray,
  handleSearch,
  setSelected,
  setSearch,
  setTag,
  difficulty,
  setDifficulty,
}) => {
  return (
    <Bar>
      <DropDown
        list={championArray}
        setSelected={setSelected}
        setSearch={setSearch}
      >
        <Search
          search={search}
          handleSearch={handleSearch}
          setSelected={setSelected}
          setSearch={setSearch}
        />
      </DropDown>
      <Tags setTag={setTag} />
      <DropDown list={constants.difficulty} setDifficulty={setDifficulty}>
        {difficulty}
      </DropDown>
    </Bar>
  )
}

const Bar = styled.div`
  width: 1440px;
  display: flex;
  flex-flow: row nowrap;
  border: solid 2px salmon;
  padding: 16px 8px;
`

export default FilterBar
