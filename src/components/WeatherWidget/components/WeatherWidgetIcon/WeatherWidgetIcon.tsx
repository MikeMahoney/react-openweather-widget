import './WeatherWidgetIconStyles.scss'

interface IWeatherWidgetIcon {
  id: string
}

const WeatherWidgetIcon: React.FC<IWeatherWidgetIcon> = ({
  id
}: IWeatherWidgetIcon) => {
  return (
    <img
      src={`http://openweathermap.org/img/wn/${id}.png`}
      className='weather-widget-icon'
    />
  )
}

export default WeatherWidgetIcon
