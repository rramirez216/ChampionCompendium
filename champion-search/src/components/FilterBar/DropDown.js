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
    <Wrapper
      onClick={toggleValue}
      padding={variant === 'tags' ? '0px 16px' : '0px 16px 0px'}
    >
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
  display: flex;
  flex-flow: row;
  padding: ${(props) => props.padding};
  cursor: pointer;
  /* transition: transform 250ms ease;
  &:hover {
    transform: translateY(-4px);
  } */
  @media (max-width: 34.375rem) {
    flex: 1 0 0;
    padding: 0;
  }
`
const Ul = styled.ul`
  width: 100%;
  max-height: 300px;
  background-color: hsl(0, 0%, 100%);
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 2;
  overflow-y: scroll;
  display: ${(props) => props.visibility};
`
const Li = styled.li`
  padding: 8px 8px;
  &:hover {
    background-color: hsl(0, 0%, 98%);
    cursor: pointer;
    border: 1px solid hsl(40 53% 58%);
  }
`

export default DropDown
