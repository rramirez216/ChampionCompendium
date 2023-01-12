import styled from 'styled-components'
import constants from '../../data/constants'

const Tags = ({ setTag }) => {
  return (
    <Wrapper>
      {constants.tags.map((value, index) => (
        <Button onClick={() => setTag(value.singular)} key={index}>
          {value.plural}
        </Button>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  flex-grow: 1;
  gap: 16px;
`
const Button = styled.button`
  font-size: 1.2rem;
  color: hsl(0, 0%, 55%);
  background-color: hsl(0, 0%, 100%);
  border-style: none;
  cursor: pointer;
`

export default Tags
