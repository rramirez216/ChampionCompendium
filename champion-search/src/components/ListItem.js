const ListItem = ({ name }) => {
  return (
    <div>
      <div>
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_0.jpg`}
          alt={name}
        />
      </div>
      <div>{name}</div>
    </div>
  )
}

export default ListItem
