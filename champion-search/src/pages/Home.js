import ChampionList from '../components/ChampionList'
import styled from 'styled-components'

const Home = ({ list }) => {
  return (
    <Wrapper>
      <ChampionList list={list} />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`

export default Home
