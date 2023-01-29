import styled from 'styled-components'
import changeDifficultyFromNumberToWord from '../../../utils/changeDifficultyFromNumberToWord'

const ChampionInfo = ({ lore, role, difficultyNumber }) => {
  let difficulty = changeDifficultyFromNumberToWord(difficultyNumber)

  return (
    <Info>
      <Section>
        <RoleWrapper>
          <H2>Role:</H2>
          <div>{role}</div>
        </RoleWrapper>
        <DifficultyWrapper>
          <H2>Difficulty:</H2>
          <div>{difficulty}</div>
        </DifficultyWrapper>
      </Section>
      <InfoDivider></InfoDivider>
      <LoreWrapper>
        <Paragraph>{lore}</Paragraph>
      </LoreWrapper>
    </Info>
  )
}

const Info = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  gap: 56px;
  font-size: 1.1rem;
  line-height: 1.7em;
  letter-spacing: 0.09ch;
  @media (max-width: 34.375rem) {
    font-size: 1rem;
    gap: 32px;
  }
`
const Section = styled.div`
  flex: 1 1 0;
  display: flex;
  align-items: center;
  gap: 64px;
`
const RoleWrapper = styled.div`
  & div {
    color: hsl(40 53% 58%);
  }
`
const DifficultyWrapper = styled.div`
  & div {
    color: hsl(40 53% 58%);
  }
`
const InfoDivider = styled.div`
  width: 20rem;
  border: 0.5px solid hsl(40 53% 58%);
  @media (max-width: 34.375rem) {
    width: 75%;
  }
`
const LoreWrapper = styled.div`
  flex: 1 1 0;
  padding-right: 64px;
`
const H2 = styled.h2`
  font-weight: 700;
`
const Paragraph = styled.p`
  line-height: 1.7em;
  @media (max-width: 34.375rem) {
    line-height: 1.6em;
  }
`

export default ChampionInfo
