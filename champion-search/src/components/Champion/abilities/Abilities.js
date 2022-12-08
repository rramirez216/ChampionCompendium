import styled from 'styled-components'
import Ability from './Ability'

const Abilities = ({ championData: { spells, passive } }) => {
  return (
    <Wrapper>
      <h1>ABILITIES</h1>
      <AbilitiesWrapper>
        <Ability
          id={99}
          name={passive.name}
          description={passive.description}
          full={passive.image.full}
        />
        {spells.map((value, index) => (
          <Ability
            key={index}
            id={value.id}
            name={value.name}
            description={value.description}
            full={value.image.full}
          />
        ))}
      </AbilitiesWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  flex: 50% 1 0;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
`
const AbilitiesWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
`

export default Abilities
