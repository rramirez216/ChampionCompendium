import styled from 'styled-components'
import changeDifficultyFromNumberToWord from '../../../utils/changeDifficultyFromNumberToWord'

const ChampionInfo = ({ lore, role, difficultyNumber }) => {
  let difficulty = changeDifficultyFromNumberToWord(difficultyNumber)

  return (
    <Wrapper>
      <Info>
        <Section>
          <RoleWrapper>
            <div>role:</div>
            <div>{role}</div>
          </RoleWrapper>
          <DifficultyWrapper>
            <p>difficulty:</p>
            <p>{difficulty}</p>
          </DifficultyWrapper>
        </Section>
        <InfoDivider></InfoDivider>
        <LoreWrapper>
          <p>{lore}</p>
        </LoreWrapper>
      </Info>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 2px solid white;
  border-right: 2px solid white;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
`
const Info = styled.div`
  display: flex;
  flex-flow: row nowrap;
`
const Section = styled.div`
  flex: 1 1 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 64px;
`
const RoleWrapper = styled.div``
const DifficultyWrapper = styled.div``
const InfoDivider = styled.div`
  height: 10rem;
  border: 1px solid hsl(0, 0%, 90%);
  margin: 0 64px;
  place-self: center;
`
const LoreWrapper = styled.div`
  flex: 1 1 0;
  padding-right: 64px;
`

export default ChampionInfo
