import './WeatherWidgetDetailsStyles.scss'

interface IWeatherWidgetDetails {
  details: any
}

const WeatherWidgetDetails: React.FC<IWeatherWidgetDetails> = ({
  details
}: IWeatherWidgetDetails) => {
  return (
    <div className='weather-widget-details'>
      <ul>
        <li>
          {`Feels like: ${details['feels_like']}`}&deg;{'C'}
        </li>
        <li>{`Humidity: ${details.humidity}`}</li>
        <li>{`Pressure: ${details.pressure}`}</li>
        <li>
          {`Max Temp: ${details['temp_max']}`}&deg;{'C'}
        </li>
        <li>
          {`Min Temp: ${details['temp_min']}`}&deg;{'C'}
        </li>
      </ul>
    </div>
  )
}

export default WeatherWidgetDetails
