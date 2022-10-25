import styled from 'styled-components'
import { Search as Csearch } from 'lucide-react'

const Search = () => {
  return (
    <>
      <Csearch />
      <Input type='text' name='csearch' placeholder='SEARCH' />
    </>
  )
}

const Input = styled.input`
  border-style: none;
`

export default Search
