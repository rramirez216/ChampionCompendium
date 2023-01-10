import styled from 'styled-components'
import ListItem from './ListItem'

const ChampionList = ({ championArray, setCurrentChampion }) => {
  return (
    <Section>
      {championArray ? (
        championArray.map((value) => (
          <ListItem
            name={value.name}
            id={value.id}
            key={value.id}
            setCurrentChampion={setCurrentChampion}
          />
        ))
      ) : (
        <div>loading...</div>
      )}
    </Section>
  )
}

const Section = styled.div`
  width: 100%;

  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 16px;
`

export default ChampionList
