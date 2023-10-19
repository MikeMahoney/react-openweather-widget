import { SubTitleText, Text } from 'sharedComponents/TextStyles/TextStyles'
import { CardContent, CardIcon, CardWrapper } from './CardStyles'
import { ReactElement } from 'react'

export type TCard = {
  title: string
  description: string
  icon: ReactElement
  iconBorderColor?: string
  iconBgColor?: string
}

interface ICard {
  title: string
  description: string
  icon: ReactElement
  iconBorderColor?: string
  iconBgColor?: string
}

const Card: React.FC<ICard> = ({
  title,
  description,
  icon,
  iconBorderColor,
  iconBgColor
}: ICard) => {
  return (
    <CardWrapper>
      <CardIcon borderColor={iconBorderColor} bgColor={iconBgColor}>
        {icon}
      </CardIcon>
      <CardContent>
        <SubTitleText>{title}</SubTitleText>
        <Text>{description}</Text>
      </CardContent>
    </CardWrapper>
  )
}

export default Card
