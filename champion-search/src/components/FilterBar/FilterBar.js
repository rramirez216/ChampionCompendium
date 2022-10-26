import styled from 'styled-components'
import Search from './Search'

const FilterBar = ({ setSearch }) => {
  return (
    <Bar>
      <Search setSearch={setSearch} />
      filter bar here
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
