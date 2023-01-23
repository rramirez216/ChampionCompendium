import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { List, ArrowLeft } from 'lucide-react'

const ChampionListButton = () => {
  return (
    <Button to={'/champions'}>
      <Arrow size={24} />
      <Span>Champion List</Span>

      <Icon size={32} />
    </Button>
  )
}

const Arrow = styled(ArrowLeft)`
  transition: transform 150ms ease-in-out;

  @media (max-width: 34.375rem) {
    display: none;
  }
`
const Button = styled(Link)`
  display: flex;
  position: absolute;
  padding: 8px;

  top: 32px;
  right: 32px;
  background-color: hsl(40 53% 48%);
  &:link,
  &:visited {
    color: white;
    text-decoration: none;
  }
  transition: border-radius 250ms;
  &:hover {
    border-radius: 8px;
  }
  &:hover ${Arrow} {
    transform: translateX(-4px);
  }

  @media (max-width: 34.375rem) {
    padding: 8px;
  }
`

const Span = styled.span`
  font-weight: 700;
  @media (max-width: 34.375rem) {
    display: none;
  }
`

const Icon = styled(List)`
  display: none;
  @media (max-width: 34.375rem) {
    display: block;
  }
`

export default ChampionListButton
