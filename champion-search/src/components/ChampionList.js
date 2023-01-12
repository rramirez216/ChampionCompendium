import styled from 'styled-components'
import ListItem from './ListItem'

const ChampionList = ({ championArray, setCurrentChampion }) => {
  return (
    <Section>
      {/* <InnerWrapper> */}
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
      {/* </InnerWrapper> */}
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
const InnerWrapper = styled.div`
  /* max-width: 250px;
  max-height: 350px; */
`

export default ChampionList
