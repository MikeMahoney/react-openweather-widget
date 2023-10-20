import LocationContext from 'context/locationContext'
import { getWeatherByLocation } from 'hooks/openWeatherHooks'
import { Fragment, useContext } from 'react'
import './WeatherWidgetContentStyles.scss'
import WeatherWidgetLoading from '../WeatherWidgetLoading/WeatherWidgetLoading'
import WeatherWidgetHeader from './components/WeatherWidgetHeader/WeatherWidgetHeader'
import WeatherWidgetMain from './components/WeatherWidgetMain/WeatherWidgetMain'

interface IWeatherWidgetContent {}

const WeatherWidgetContent: React.FC<IWeatherWidgetContent> = () => {
  const location = useContext(LocationContext)
  const { weather, isWeatherLoading, setIsWeatherLoading } =
    getWeatherByLocation(location)

  console.log(weather, isWeatherLoading)
  const onClickRefresh = () => {
    setIsWeatherLoading(true)
  }

  return (
    <div className='weather-widget-content'>
      {isWeatherLoading ? (
        <WeatherWidgetLoading title='Fetching temperature data' />
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
