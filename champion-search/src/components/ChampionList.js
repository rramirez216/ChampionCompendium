import ListItem from './ListItem'

const ChampionList = ({ list }) => {
  return (
    <div>
      {list ? (
        list.map((value) => <ListItem name={value.name} />)
      ) : (
        <div>loading...</div>
      )}
    </div>
  )
}

export default ChampionList
