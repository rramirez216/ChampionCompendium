import styled from 'styled-components'
import { XCircle } from 'lucide-react'

const X = ({
  displayBoolean,
  setSelected,
  setSearch,
  location,
  setDifficulty,
  setTag,
}) => {
  return (
    <Icon
      display={displayBoolean ? 'block' : 'none'}
      onClick={() => {
        if (location === 'search') {
          setSelected('')
          setSearch('')
        } else if (location === 'tags') {
          setTag('All')
        } else {
          setDifficulty('All Difficulties')
        }
      }}
    />
  )
}

const Icon = styled(XCircle)`
  cursor: pointer;
  display: ${(props) => props.display};
  transform: translateX(4px);
`
export default X
