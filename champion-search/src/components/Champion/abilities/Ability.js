import styled from 'styled-components'

const Ability = ({ id, name, description, full }) => {
  const getCorrectUrl = (spellID, spellName) => {
    if (spellID === 99) {
      return `http://ddragon.leagueoflegends.com/cdn/12.23.1/img/passive/${spellName}`
    } else {
      return `http://ddragon.leagueoflegends.com/cdn/12.22.1/img/spell/${spellName}`
    }
  }

  return (
    <div>
      <img src={getCorrectUrl(id, full)} alt={name} />
    </div>
  )
}

export default Ability
