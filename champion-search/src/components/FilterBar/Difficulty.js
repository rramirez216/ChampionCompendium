import styled from 'styled-components'
import X from './X'
import DropDown from './DropDown'
import constants from '../../data/constants'

const Difficulty = ({ difficulty, setDifficulty }) => {
  return (
    <Wrapper>
      <Current>{difficulty}</Current>
      <DropDown
        list={constants.difficulty}
        setDifficulty={setDifficulty}
        variant={'difficulty'}
      />
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
