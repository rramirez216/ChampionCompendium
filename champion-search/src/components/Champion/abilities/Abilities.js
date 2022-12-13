import { useState } from 'react'
import styled from 'styled-components'
import Ability from './Ability'

const Abilities = ({ championData: { spells, passive } }) => {
  const [value, setValue] = useState({
    id: passive.id,
    name: passive.name,
    description: passive.description,
  })
  passive.id = value.id
  spells.unshift(passive)
  return (
    <Wrapper>
      <h1>ABILITIES</h1>
      <AbilitiesWrapper>
        {spells.map((value, index) => (
          <Ability
            key={index}
            index={index}
            abilityKey={value.id}
            abilityName={value.name}
            abilityDescription={value.description}
            full={value.image.full}
            setValue={setValue}
          />
        ))}
      </AbilitiesWrapper>

      <div>
        <p>{value.id}</p>
        <p>{value.name}</p>
        <p>{value.description}</p>
      </div>
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
  gap: 32px;
`

export default Abilities
