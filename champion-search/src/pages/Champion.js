import styled from 'styled-components'
import Hero from '../components/Champion/hero/Hero'
import Skins from '../components/Champion/Skins/Skins'

const Champion = ({ championData }) => {
  return (
    <Wrapper>
      {championData ? <Hero championData={championData} /> : 'Loading'}
      <Section>
        <H2>Available skins:</H2>
        {championData ? (
          <Skins
            championSkins={championData.skins}
            championId={championData.id}
          />
        ) : (
          'Loading'
        )}
      </Section>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  position: relative;
`
const Section = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: 100%;
  text-align: center;
`
const H2 = styled.h2`
  font-size: 2.5rem;
`

export default Champion
