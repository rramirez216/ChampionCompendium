import styled from 'styled-components'
import useToggle from '../../hooks/useToggle'

const DropDown = ({
  children,
  list,
  setSelected,
  setSearch,

  setDifficulty,
}) => {
  const [value, toggleValue] = useToggle(false)
  return (
    <Wrapper onClick={toggleValue}>
      {children}

      {/* Onclick event not working on list item when drop down is less than 4 */}

      <Ul visibility={value ? 'block' : 'none'}>
        {list ? (
          list.length > 3 ? (
            list.map((item) => (
              <Li
                onClick={() => {
                  setSelected(item.name)
                  setSearch(item.name)
                }}
                key={item.id}
              >
                {item.name}
              </Li>
            ))
          ) : (
            list.map((item, index) => (
              <Li
                onClick={() => {
                  setDifficulty(item.name)
                }}
                key={index}
              >
                {item.name}
              </Li>
            ))
          )
        ) : (
          <Li>loading...</Li>
        )}
      </Ul>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 200px;
`
const Ul = styled.ul`
  width: 100%;
  max-height: 300px;
  background-color: hsl(0, 0%, 100%);
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
