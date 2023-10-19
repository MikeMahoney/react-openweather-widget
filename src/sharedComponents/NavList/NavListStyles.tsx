import styled from 'styled-components'

export const NavListWrapper = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`

export const NavListItem = styled.li<{ selected?: boolean }>`
  padding: 8px 0;
  background-color: ${(props) =>
    props.selected ? props.theme.colors.oliveGreen : 'white'};
  color: ${(props) =>
    props.selected ? 'white' : props.theme.colors.oliveGreen};
  &:hover {
    color: white;
    background-color: ${(props) => props.theme.colors.oliveGreen};
    cursor: pointer;
  }
`
