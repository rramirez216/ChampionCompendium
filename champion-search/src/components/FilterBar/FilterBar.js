import styled from 'styled-components'
import Search from './Search'
import DropDown from './DropDown'

const FilterBar = ({
  search,
  championArray,
  handleSearch,
  setSelected,
  setSearch,
}) => {
  return (
    <Bar>
      <DropDown
        championArray={championArray}
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

      {/* <DropDown>Difficulty</DropDown> */}
    </Bar>
  )
}

const Bar = styled.div`
  width: 1440px;
  display: flex;
  flex-flow: row nowrap;
  border: solid 2px salmon;
`

export default FilterBar
