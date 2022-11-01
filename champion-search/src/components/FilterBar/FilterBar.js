import styled from 'styled-components'
import Search from './Search'
import DropDown from './DropDown'

const FilterBar = ({ setSearch, championArray, handleSearch }) => {
  return (
    <Bar>
      <DropDown championArray={championArray}>
        <Search setSearch={setSearch} handleSearch={handleSearch} />
      </DropDown>
      filter bar here
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
