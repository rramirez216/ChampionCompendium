import styled from 'styled-components'
import { XCircle } from 'lucide-react'

const X = ({
  displayBoolean,
  setSelected,
  setSearch,
  location,
  setDifficulty,
}) => {
  return (
    <Circle
      display={displayBoolean ? 'block' : 'none'}
      onClick={() => {
        if (location === 'search') {
          setSelected('')
          setSearch('')
        } else {
          setDifficulty('All Difficulties')
        }
      }}
    />
  )
}

const Circle = styled(XCircle)`
  cursor: pointer;
  display: ${(props) => props.display};
`
export default X
