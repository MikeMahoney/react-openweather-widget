import './WeatherWidgetLoadingStyles.scss'

interface IWeatherWidgetError {
  title: string
  description: string
}

const WeatherWidgetError: React.FC<IWeatherWidgetError> = ({
  title,
  description
}: IWeatherWidgetError) => {
  return (
    <div className='weather-widget-error'>
      <div className='weather-widget-error__title'>{title}</div>
      <div className='weather-widget-error__description'>{description}</div>
    </div>
  )
}

export default WeatherWidgetError
