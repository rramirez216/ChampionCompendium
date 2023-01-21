import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ListItem = ({ name, id, setCurrentChampion }) => {
  let newId
  id === 'Wukong' ? (newId = 'MonkeyKing') : (newId = id)
  return (
    <Card
      to={`/champions/${newId.toLowerCase()}`}
      onClick={() => setCurrentChampion(newId)}
    >
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${newId}_0.jpg`}
        alt={name}
      />
      <Name>
        <Span>{name}</Span>
      </Name>
      <Square></Square>
    </Card>
  )
}

const Card = styled(Link)`
  max-height: 450px;
  display: block;
  overflow: hidden;
  position: relative;
`
const Name = styled.h3`
  padding: 8px;
  font-size: 2rem;
  color: white;
  background-color: #071d25;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`
const Span = styled.span`
  display: block;
`
const Square = styled.div`
  width: 50px;
  height: 50px;
  transform: rotate(45deg) translateY(-45px);
  background-color: #fff;
  position: absolute;
  top: 0;
  right: 0;
`

export default ListItem
