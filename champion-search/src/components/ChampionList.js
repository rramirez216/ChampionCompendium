import styled from 'styled-components'
import ListItem from './ListItem'

const ChampionList = ({ list }) => {
  return (
    <Section>
      {list ? (
        list.map((value) => <ListItem name={value.name} id={value.id} />)
      ) : (
        <div>loading...</div>
      )}
    </Section>
  )
}

const Section = styled.div`
  max-width: 1440px;
  /* display: grid;
  grid-template-columns: repeat(5, minmax(150px, 1fr));
  grid-template-rows: repeat(auto, 1fr); */
  display: flex;
  flex-flow: row wrap;
  gap: 16px;
`

export default ChampionList
