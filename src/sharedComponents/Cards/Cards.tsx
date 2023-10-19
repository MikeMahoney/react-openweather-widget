import { CardsWrapper } from './CardsStyles'
import Card, { TCard } from './components/Card/Card'

interface ICards {
  cards: Array<TCard>
}

const Cards: React.FC<ICards> = ({ cards }: ICards) => {
  return (
    <CardsWrapper>
      {cards.map((card, index) => (
        <Card
          title={card.title}
          description={card.description}
          icon={card.icon}
          iconBorderColor={card.iconBorderColor}
          iconBgColor={card.iconBgColor}
          key={index}
        />
      ))}
    </CardsWrapper>
  )
}

export default Cards
