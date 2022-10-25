import styled from 'styled-components'
import Search from './Search'

const FilterBar = () => {
  return (
    <Bar>
      <Search />
      filter bar here
    </Bar>
  )
}

const Bar = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  border: solid 2px salmon;
`

export default FilterBar
