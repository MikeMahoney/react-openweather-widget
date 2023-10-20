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
          <span>{'Feels like: '}</span>
          <span>
            {details['feels_like']}&deg;{'C'}
          </span>
        </li>
        <li>
          <span>{'Humidity: '}</span>
          <span>{`${details.humidity}%`}</span>
        </li>
        <li>
          <span>{'Pressure: '}</span>
          <span>{`${details.pressure}hPa`}</span>
        </li>
        <li>
          <span>{'Max Temp: '}</span>
          <span>
            {details['temp_max']}&deg;{'C'}
          </span>
        </li>
        <li>
          <span>{'Min Temp: '}</span>
          <span>
            {details['temp_min']}&deg;{'C'}
          </span>
        </li>
      </ul>
    </div>
  )
}

export default WeatherWidgetDetails
