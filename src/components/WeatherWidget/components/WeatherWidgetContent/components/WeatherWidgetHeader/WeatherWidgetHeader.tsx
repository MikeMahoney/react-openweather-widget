import { RefreshIcon } from 'sharedComponents/Icons/RefreshIcon/RefreshIcon'
import './WeatherWidgetHeaderStyles.scss'
import moment from 'moment'

interface IWeatherWidgetHeader {
  weather: any
  onClickRefresh: () => void
}

const WeatherWidgetHeader: React.FC<IWeatherWidgetHeader> = ({
  weather,
  onClickRefresh
}: IWeatherWidgetHeader) => {
  return (
    <header className='weather-widget-header'>
      <div className='weather-widget-header__name'>
        {`${weather.name}, ${weather.sys.country}`}
      </div>
      <div className='weather-widget-header__rhs'>
        <div className='weather-widget-header__time'>
          {moment().format('MMM Do, HH:mm')}
        </div>
        <RefreshIcon
          className='weather-widget-header__refresh-icon'
          onClick={onClickRefresh}
        />
      </div>
    </header>
  )
}

export default WeatherWidgetHeader
