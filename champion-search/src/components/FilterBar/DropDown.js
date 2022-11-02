import styled from 'styled-components'
import useToggle from '../../hooks/useToggle'

const DropDown = ({ children, championArray, setSelected, setSearch }) => {
  const [value, toggleValue] = useToggle(false)
  return (
    <Wrapper onClick={toggleValue}>
      {children}
      <Ul visibility={value ? 'block' : 'none'}>
        {championArray ? (
          championArray.map((value) => (
            <Li
              onClick={() => {
                setSelected(value.name)
                setSearch(value.name)
              }}
              key={value.id}
            >
              {value.name}
            </Li>
          ))
        ) : (
          <Li>loading...</Li>
        )}
      </Ul>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`
const Ul = styled.ul`
  width: 100%;
  max-height: 300px;
  background-color: hsl(0, 0%, 100%);
  text-align: left;
  position: absolute;
  top: 100%;
  z-index: 2;
  overflow-y: scroll;
  display: ${(props) => props.visibility};
`
const Li = styled.li`
  &:hover {
    background-color: hsl(0, 0%, 95%);
    cursor: pointer;
  }
`

export default DropDown
