import styled from 'styled-components'
import ListItem from './ListItem'
import getValuesFromResponse from '../utils/getValuesFromResponse'

const ChampionList = ({ result }) => {
  let list
  if (result) {
    list = getValuesFromResponse(result)
  }
  return (
    <Section>
      {list ? (
        list.map((value) => (
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
