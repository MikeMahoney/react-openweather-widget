import { useContext, useState } from 'react'
import moment from 'moment'
import { TLocation, getForecastByLocation } from 'hooks/openWeatherHooks'
import './WeatherWidgetForecastStyles.scss'
import LocationContext from 'context/locationContext'
import WeatherWidgetLoading from 'components/WeatherWidget/components/WeatherWidgetLoading/WeatherWidgetLoading'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { Tab, Tabs } from 'sharedComponents/Tabs/Tabs'
import {
  getHourlyForecastLabels,
  getHourlyForecastTemperatures
} from 'logic/forecastLogic'
import WeatherWidgetError from 'components/WeatherWidget/components/WeatherWidgetError/WeatherWidgetError'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

interface IWeatherWidgetForecast {}

const WeatherWidgetForecast: React.FC<IWeatherWidgetForecast> = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0)
  const location = useContext<TLocation>(LocationContext)
  const { groupedForecast, isForecastLoading, errorMessage } =
    getForecastByLocation(location)

  const groupedForecastList = Object.values(groupedForecast)

  const temperatures = getHourlyForecastTemperatures(
    groupedForecast,
    selectedTabIndex
  )
  const labels = getHourlyForecastLabels(groupedForecast, selectedTabIndex)
  const data = {
    labels,
    datasets: [
      {
        label: 'Temperature (°C)',
        data: temperatures,
        borderColor: 'rgb(255, 145, 61)',
        backgroundColor: 'rgba(255, 145, 61, 0.5)'
      }
    ]
  }

  const options = {
    responsive: true
  }

  const onClickTab = (index: number) => {
    setSelectedTabIndex(index)
  }

  return (
    <div className='weather-widget-forecast'>
      {isForecastLoading ? (
        <WeatherWidgetLoading
          title='Fetching forecast data...
        '
        />
      ) : errorMessage ? (
        <WeatherWidgetError message={errorMessage} />
      ) : (
        <div className='weather-widget-forecast__content'>
          <Tabs>
            {groupedForecastList.map((forecast: any, index: number) => (
              <Tab
                key={index}
                title={moment.unix(forecast[0].dt).format('MMM Do')}
                onClick={() => {
                  onClickTab(index)
                }}
                selected={selectedTabIndex === index}
              />
            ))}
          </Tabs>
          <div className='weather-widget-forecast__content__chart'>
            <Line options={options} data={data} />
          </div>
        </div>
      )}
    </div>
  )
}

export default WeatherWidgetForecast
