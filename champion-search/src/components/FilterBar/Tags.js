import styled from 'styled-components'
import constants from '../../data/constants'

const Tags = ({ setTag }) => {
  return (
    <Wrapper>
      {constants.tags.map((value) => (
        <Button onClick={() => setTag(value.singular)}>{value.plural}</Button>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
`
const Button = styled.button`
  color: hsl(0, 0%, 55%);
  background-color: hsl(0, 0%, 100%);
  border-style: none;
  cursor: pointer;
`

export default Tags
