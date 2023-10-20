import { ReactNode } from 'react'
import './WeatherWidgetCardsStyles.scss'

interface IWeatherWidgetCards {
  children: ReactNode
}

const WeatherWidgetCards: React.FC<IWeatherWidgetCards> = ({
  children
}: IWeatherWidgetCards) => {
  return <section className='weather-widget-cards'>{children}</section>
}

export default WeatherWidgetCards
