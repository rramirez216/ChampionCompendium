import styled from 'styled-components'

const ListItem = ({ name, id }) => {
  return (
    <Card>
      <img
        src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_0.jpg`}
        alt={name}
      />
      <Name>
        <Span>{name}</Span>
      </Name>
      <Square></Square>
    </Card>
  )
}

const Card = styled.div`
  max-width: 250px;
  height: 350px;
  overflow: hidden;
  position: relative;
`
// const Image = styled.div``
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
