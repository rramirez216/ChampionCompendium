import styled from 'styled-components'

const ChampionInfo = ({ championData: { name, lore, title, id } }) => {
  return (
    <Wrapper>
      <div>
        <ImageWrapper>
          <DefaultImage
            src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`}
            alt={name}
          />
        </ImageWrapper>
        <Info>
          <Heading>
            <Span>{title}</Span>
            <br />
            <Strong>{name}</Strong>
          </Heading>
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
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  max-width: 900px;
`
const ImageWrapper = styled.div``
const DefaultImage = styled.img``
const Info = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  position: relative;
  border: 2px solid red;
  padding: 8% 4%;
`
const Heading = styled.h1`
  position: absolute;
  top: 0;
  right: 40%;
  text-align: center;
`
const Span = styled.span``
const Strong = styled.strong``
const Section = styled.div`
  flex: 1 1 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
const RoleWrapper = styled.div``
const DifficultyWrapper = styled.div``
const InfoDivider = styled.div`
  height: auto;
  border: 1px solid red;
  margin-right: 32px;
`
const LoreWrapper = styled.div`
  flex: 1 1 0;
`

export default ChampionInfo
