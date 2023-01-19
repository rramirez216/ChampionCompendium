import styled from 'styled-components'
import constants from '../../data/constants'
import DropDown from './DropDown'
import X from './X'

const Tags = ({ setTag, tag }) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <DropDown
          list={constants.tags.slice(1)}
          setTag={setTag}
          tag={tag}
          variant={'tags'}
        >
          <div>{tag}</div>
          <X
            displayBoolean={tag !== 'All Roles'}
            location={'tags'}
            setTag={setTag}
          />
        </DropDown>
      </InnerWrapper>
      {constants.tags.map((value) => (
        <Button onClick={() => setTag(value.singular)} key={value.id}>
          {value.name}
        </Button>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  gap: 16px;
  @media (max-width: 34.375rem) {
    flex: 1 0 0;
  }
`
const Button = styled.button`
  font-size: 1.2rem;
  color: hsl(0, 0%, 55%);
  background-color: hsl(0, 0%, 100%);
  border-style: none;
  cursor: pointer;
  @media (max-width: 68.75rem) {
    display: none;
  }
`
const InnerWrapper = styled.div`
  display: none;

  @media (max-width: 68.75rem) {
    display: block;
  }
  @media (max-width: 34.375rem) {
    width: 100%;
    padding-left: 16px;
  }
`

export default Tags
