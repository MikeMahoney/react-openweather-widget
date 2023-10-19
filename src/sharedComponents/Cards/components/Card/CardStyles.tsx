import styled from 'styled-components'

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.colors.grey};
  border-radius: 5px;
  width: 250px;
  margin-left: 25px;
  padding: 20px 40px;
  z-index: 1;
  position: relative;
  -webkit-box-shadow: -1px 0px 5px 3px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: -1px 0px 5px 3px rgba(0, 0, 0, 0.05);
  box-shadow: -1px 0px 5px 3px rgba(0, 0, 0, 0.05);
`

export const CardIcon = styled.div<{ borderColor?: string; bgColor?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: white;
  border: 1px solid ${(props) => props.borderColor || 'grey'};
  background-color: ${(props) => props.bgColor || 'white'};
  border-radius: 25px;
  position: absolute;
  left: -25px;
  top: 30%;
  z-index: 2;
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 5px;
`
