import styled from 'styled-components'
import X from './X'

const Difficulty = ({ difficulty, setDifficulty }) => {
  return (
    <Wrapper>
      <Current>{difficulty}</Current>
      <X
        displayBoolean={difficulty !== 'All Difficulties'}
        setDifficulty={setDifficulty}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: row;
`
const Current = styled.div``

export default Difficulty
