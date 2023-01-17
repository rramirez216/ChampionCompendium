import styled from 'styled-components'
import { Search as Csearch } from 'lucide-react'
import X from './X'

const Search = ({ search, handleSearch, setSelected, setSearch }) => {
  return (
    <Label>
      <Csearch />
      <Input
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
        autoComplete='off'
        type='text'
        name='csearch'
        placeholder='SEARCH'
      />
      <X
        displayBoolean={search.length > 0}
        setSelected={setSelected}
        setSearch={setSearch}
        location={'search'}
      />
    </Label>
  )
}

const Label = styled.label`
  display: flex;
  width: 120px;
`
const Input = styled.input`
  border-style: none;
  font-size: 1.2rem;
  width: 100%;
`

export default Search
