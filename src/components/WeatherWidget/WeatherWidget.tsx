import { getLocationByCity } from 'hooks/openWeatherHooks'
import WeatherWidgetContent from './components/WeatherWidgetContent/WeatherWidgetContent'
import LocationContext from 'context/locationContext'
import WeatherWidgetLoading from './components/WeatherWidgetLoading/WeatherWidgetLoading'
import './WeatherWidgetStyles.scss'
import moment from 'moment'
import WeatherWidgetError from './components/WeatherWidgetError/WeatherWidgetError'

interface IWeatherWidget {
  city: string
}

const WeatherWidget: React.FC<IWeatherWidget> = ({ city }) => {
  const { location, isLocationLoading, errorMessage } = getLocationByCity(city)

  // Check if its between 6pm and 6am
  // If so, display a darker blue to represent night
  const currentHour = moment().hour()
  const classModifier =
    currentHour > 18 && currentHour < 6
      ? 'weather-widget--night'
      : 'weather-widget--day'

  console.log(location, isLocationLoading)

  return (
    <div className={`weather-widget ${classModifier}`}>
      {isLocationLoading ? (
        <WeatherWidgetLoading title='Fetching location data...' />
      ) : errorMessage ? (
        <WeatherWidgetError message={errorMessage} />
      ) : (
        <LocationContext.Provider value={location}>
          <WeatherWidgetContent />
        </LocationContext.Provider>
      )}
    </div>
  )
}

export default WeatherWidget
