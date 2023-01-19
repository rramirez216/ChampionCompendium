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
  flex-flow: row;
  width: 120px;
  @media (max-width: 34.375rem) {
    width: 100%;
  }
`
const Input = styled.input`
  border-style: none;
  font-size: 1.2rem;
  width: 90%;
  margin-left: 8px;
  outline: none;
  &::placeholder {
    color: hsl(0 0% 70%);
    font-size: 0.9rem;
  }
  @media (max-width: 34.375rem) {
    margin: 0;
    &:focus {
      border: 0.2px solid hsl(40 53% 58%);
      width: 100%;
    }
  }
`

export default Search
