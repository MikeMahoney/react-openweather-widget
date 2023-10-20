import './WeatherWidgetMainStyles.scss'
import WeatherWidgetIcon from 'components/WeatherWidget/components/WeatherWidgetIcon/WeatherWidgetIcon'
import WeatherWidgetCards from './components/WeatherWidgetCards/WeatherWidgetCards'
import WeatherWidgetDetails from '../WeatherWidgetDetails/WeatherWidgetDetails'
import Card from 'sharedComponents/Card/Card'
import WeatherWidgetForecast from '../WeatherWidgetForecast/WeatherWidgetForecast'

interface IWeatherWidgetMain {
  weather: any
}

const WeatherWidgetMain: React.FC<IWeatherWidgetMain> = ({
  weather
}: IWeatherWidgetMain) => {
  return (
    <main className='weather-widget-main'>
      <section className='weather-widget-main__weather'>
        <div className='weather-widget-main__weather__temperature'>
          {weather.main.temp}&deg;{'C'}
        </div>
        <div className='weather-widget-main__weather__type'>
          <div className='weather-widget-main__weather__description'>
            <span>{weather.weather[0].main}</span>
            <span>{weather.weather[0].description}</span>
          </div>
          <WeatherWidgetIcon id={weather.weather[0].icon} />
        </div>
      </section>
      <WeatherWidgetCards>
        <Card title='Details'>
          <WeatherWidgetDetails details={weather.main} />
        </Card>
        <Card title='5 Day Forecast'>
          <WeatherWidgetForecast />
        </Card>
      </WeatherWidgetCards>
    </main>
  )
}

export default WeatherWidgetMain
