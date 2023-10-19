import styled from 'styled-components'

export const TitleText = styled.span`
  display: inline-flex;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSize.title};
  text-align: center;
`

export const SubTitleText = styled.span`
  display: inline-flex;
  font-weight: 600;
  text-align: left;
  font-size: ${(props) => props.theme.fontSize.subTitle};
`

export const Text = styled.p`
  display: inline-flex;
  font-weight: 400;
  text-align: left;
  margin: 0;
`
