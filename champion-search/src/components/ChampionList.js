import styled from 'styled-components'
import ListItem from './ListItem'

const ChampionList = ({ list }) => {
  return (
    <section>
      {list ? (
        list.map((value) => <ListItem name={value.name} id={value.id} />)
      ) : (
        <div>loading...</div>
      )}
    </section>
  )
}

export default ChampionList
