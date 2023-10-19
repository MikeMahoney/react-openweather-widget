import styled from 'styled-components'

export const CollapsibleWrapper = styled.div`
  color: white;
  font-weight: 600;
`

export const CollapsibleHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: white;
  border-bottom: 1px solid white;
  height: 30px;
  padding: 0 10px;
  &:hover {
    cursor: pointer;
  }
`

export const CollapsibleCaretOpen = styled.div`
  font-size: 15px;
`

export const CollapsibleCaretClosed = styled.div`
  font-size: 15px;
`

export const CollapsibleContent = styled.div``
