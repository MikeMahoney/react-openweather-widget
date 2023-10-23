import LocationContext from 'context/locationContext'
import { getWeatherByLocation } from 'hooks/openWeatherHooks'
import { Fragment, useContext } from 'react'
import './WeatherWidgetContentStyles.scss'
import WeatherWidgetLoading from '../WeatherWidgetLoading/WeatherWidgetLoading'
import WeatherWidgetHeader from './components/WeatherWidgetHeader/WeatherWidgetHeader'
import WeatherWidgetMain from './components/WeatherWidgetMain/WeatherWidgetMain'
import WeatherWidgetError from '../WeatherWidgetError/WeatherWidgetError'

interface IWeatherWidgetContent {}

const WeatherWidgetContent: React.FC<IWeatherWidgetContent> = () => {
  const location = useContext(LocationContext)
  const { weather, isWeatherLoading, setIsWeatherLoading, errorMessage } =
    getWeatherByLocation(location)

  const onClickRefresh = () => {
    setIsWeatherLoading(true)
  }

  return (
    <div className='weather-widget-content'>
      {isWeatherLoading ? (
        <WeatherWidgetLoading title='Fetching weather data...' />
      ) : errorMessage ? (
        <WeatherWidgetError message={errorMessage} />
      ) : (
        <Fragment>
          <WeatherWidgetHeader
            weather={weather}
            onClickRefresh={onClickRefresh}
          />
          <WeatherWidgetMain weather={weather} />
        </Fragment>
      )}
    </div>
  )
}

export default WeatherWidgetContent
