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
          <div>{tag !== 'All' ? tag : 'All Roles'}</div>
          <X displayBoolean={tag !== 'All'} location={'tags'} setTag={setTag} />
        </DropDown>
      </InnerWrapper>
      {constants.tags.map((value) => (
        <Button onClick={() => setTag(value.singular)} key={value.id}>
          {value.name === 'All Roles' ? 'All' : value.name}
          <Span></Span>
        </Button>
      ))}
    </Wrapper>
  )
}
// color: hsl(40 53% 58%);

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  gap: 16px;
  @media (max-width: 34.375rem) {
    flex: 1 0 0;
  }
`
const Span = styled.span`
  display: block;
  width: 0;
  opacity: 0;
  margin: auto;
  transform: translateY(8px);
  border: 1px solid hsl(40 53% 58%);
  transition: width 450ms ease, opacity 550ms ease-in-out;
`
const Button = styled.button`
  font-size: 1.2rem;
  color: hsl(0, 0%, 55%);
  background-color: hsl(0, 0%, 100%);
  border-style: none;
  cursor: pointer;
  transition: color 350ms ease-out;
  &:hover {
    color: hsl(0, 0%, 10%);
  }
  &:hover ${Span} {
    width: 75%;
    opacity: 1;
  }

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
