import './WeatherWidgetErrorStyles.scss'

interface IWeatherWidgetError {
  message: string
}

const WeatherWidgetError: React.FC<IWeatherWidgetError> = ({
  message
}: IWeatherWidgetError) => {
  return (
    <div className='weather-widget-error'>
      <div className='weather-widget-error__title'>{'ERROR'}</div>
      <div className='weather-widget-error__description'>{message}</div>
    </div>
  )
}

export default WeatherWidgetError
