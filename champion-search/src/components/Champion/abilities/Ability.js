import styled from 'styled-components'

const Ability = ({
  index,
  abilityKey,
  abilityName,
  abilityDescription,
  full,
  setValue,
}) => {
  const getCorrectUrl = (index, spellName) => {
    if (index === 0) {
      return `http://ddragon.leagueoflegends.com/cdn/12.23.1/img/passive/${spellName}`
    } else {
      return `http://ddragon.leagueoflegends.com/cdn/12.22.1/img/spell/${spellName}`
    }
  }

  return (
    <div
      onClick={() =>
        setValue({
          id: abilityKey,
          name: abilityName,
          description: abilityDescription,
        })
      }
    >
      {index}
      <img src={getCorrectUrl(index, full)} alt={abilityName} />
    </div>
  )
}

export default Ability
