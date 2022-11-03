import styled from 'styled-components '
import constants from '../../data/constants'

const Tags = () => {
  return (
    <div>
      {constants.tags.map((value) => (
        <div>{value}</div>
      ))}
    </div>
  )
}

export default Tags
