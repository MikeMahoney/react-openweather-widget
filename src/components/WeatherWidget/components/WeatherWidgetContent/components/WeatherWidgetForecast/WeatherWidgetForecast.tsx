import { useContext } from 'react'
import moment from 'moment'
import { TLocation, getForecastByLocation } from 'hooks/openWeatherHooks'
import './WeatherWidgetForecastStyles.scss'
import LocationContext from 'context/locationContext'
import WeatherWidgetLoading from 'components/WeatherWidget/components/WeatherWidgetLoading/WeatherWidgetLoading'

interface IWeatherWidgetForecast {}

const WeatherWidgetForecast: React.FC<IWeatherWidgetForecast> = () => {
  const location = useContext<TLocation>(LocationContext)
  const { forecast, isForecastLoading } = getForecastByLocation(location)

  return (
    <div className='weather-widget-forecast'>
      {isForecastLoading ? (
        <WeatherWidgetLoading title='Fetching forecast data' />
      ) : (
        <ul>
          {forecast.list.map((item: any, index: number) => (
            <li key={index}>
              <span>{moment.unix(item.dt).format('MMM Do YYYY')}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default WeatherWidgetForecast
