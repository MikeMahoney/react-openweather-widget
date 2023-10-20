import './WeatherWidgetLoadingStyles.scss'

interface IWeatherWidgetLoading {
  title: string
}

const WeatherWidgetLoading: React.FC<IWeatherWidgetLoading> = ({
  title
}: IWeatherWidgetLoading) => {
  return (
    <div className='weather-widget-loading'>
      <div className='weather-widget-loading__title'>{title}</div>
    </div>
  )
}

export default WeatherWidgetLoading
