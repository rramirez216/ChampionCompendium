import styled from 'styled-components'
import useToggle from '../../hooks/useToggle'

const DropDown = ({
  children,
  list,
  variant,
  setSelected,
  setSearch,
  setDifficulty,
  setTag,
}) => {
  const [value, toggleValue] = useToggle(false)
  return (
    <Wrapper onClick={toggleValue}>
      {children}

      <Ul visibility={value ? 'block' : 'none'}>
        {list
          ? list.map((item) => (
              <Li
                onClick={() => {
                  if (variant === 'difficulty') {
                    setDifficulty(item.name)
                  } else if (variant === 'search') {
                    setSearch(item.name)
                    setSelected(item.name)
                  } else {
                    setTag(item.singular)
                  }
                }}
                key={item.id}
              >
                {item.name}
              </Li>
            ))
          : null}
      </Ul>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  /* width: max-content; */
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
