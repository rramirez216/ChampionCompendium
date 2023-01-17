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

const Section = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 300px));
  justify-content: center;
  gap: 32px;
`

export default ChampionList
