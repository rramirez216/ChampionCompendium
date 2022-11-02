import styled from 'styled-components'
import { Search as Csearch, XCircle } from 'lucide-react'

const Search = ({ search, handleSearch, setSelected, setSearch }) => {
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
      <Circle
        display={search.length > 0 ? 'block' : 'none'}
        onClick={() => {
          setSelected('')
          setSearch('')
        }}
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
const Circle = styled(XCircle)`
  cursor: pointer;
  display: ${(props) => props.display};
`

export default Search
