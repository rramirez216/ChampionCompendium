import styled from 'styled-components'
import { Search as Csearch } from 'lucide-react'

const Search = ({ search, setSearch, handleSearch }) => {
  return (
    <Label>
      <Csearch />
      <Input
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
        type='text'
        name='csearch'
        placeholder='SEARCH'
      />
    </Label>
  )
}

const Label = styled.label`
  display: flex;
`
const Input = styled.input`
  border-style: none;
`

export default Search
