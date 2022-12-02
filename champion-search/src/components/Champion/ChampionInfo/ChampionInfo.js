import styled from 'styled-components'

const ChampionInfo = ({ championData: { name, lore, title, id } }) => {
  return (
    <Wrapper>
      <Info>
        <Section>
          <RoleWrapper>
            <p>role:</p>
            <p>Mage</p>
          </RoleWrapper>
          <DifficultyWrapper>
            <p>difficulty:</p>
            <p>Moderate</p>
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
  width: 100%;
  height: 100%;
`
const Info = styled.div`
  /* height: min-content; */
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  /* border: 2px solid red; */
`

const Section = styled.div`
  flex: 1 1 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 80px 64px;
`
const RoleWrapper = styled.div``
const DifficultyWrapper = styled.div``
const InfoDivider = styled.div`
  height: auto;
  border: 1px solid red;
`
const LoreWrapper = styled.div`
  flex: 1 1 0;
  padding: 80px 64px;
`

export default ChampionInfo
