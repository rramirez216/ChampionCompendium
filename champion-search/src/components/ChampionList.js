import styled from 'styled-components'
import ListItem from './ListItem'

const ChampionList = ({ championArray }) => {
  console.log(championArray)
  return (
    <Section>
      {championArray ? (
        championArray.map((value) => (
          <ListItem name={value.name} id={value.id} key={value.id} />
        ))
      ) : (
        <div>loading...</div>
      )}
    </Section>
  )
}

const Section = styled.div`
  max-width: 1440px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 16px;
`

export default ChampionList
