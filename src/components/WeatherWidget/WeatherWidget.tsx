import { getWeatherData } from 'hooks/openWeatherData'

interface IWeatherWidget {
  city: string
}

const WeatherWidget: React.FC<IWeatherWidget> = ({ city }) => {
  const { weatherData, isWeatherDataLoading } = getWeatherData(city)

  console.log(weatherData, isWeatherDataLoading)

  return <div></div>
}

export default WeatherWidget
