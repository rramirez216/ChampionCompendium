import styled from 'styled-components'
import changeDifficultyFromNumberToWord from '../../../utils/changeDifficultyFromNumberToWord'

const ChampionInfo = ({ lore, role, difficultyNumber }) => {
  let difficulty = changeDifficultyFromNumberToWord(difficultyNumber)

  return (
    <>
      <Info>
        <Section>
          <RoleWrapper>
            <div>role:</div>
            <div>{role}</div>
          </RoleWrapper>
          <DifficultyWrapper>
            <div>difficulty:</div>
            <div>{difficulty}</div>
          </DifficultyWrapper>
        </Section>
        <InfoDivider></InfoDivider>
        <LoreWrapper>
          <p>{lore}</p>
        </LoreWrapper>
      </Info>
    </>
  )
}

// const Wrapper = styled.section`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `
const Info = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  gap: 64px;
`
const Section = styled.div`
  flex: 1 1 0;
  display: flex;
  align-items: center;
  gap: 64px;
`
const RoleWrapper = styled.div``
const DifficultyWrapper = styled.div``
const InfoDivider = styled.div`
  width: 20rem;
  border: 1px solid hsl(0, 0%, 90%);
`
const LoreWrapper = styled.div`
  flex: 1 1 0;
  padding-right: 64px;
`

export default ChampionInfo
