import moment from 'moment'
import { groupBy, isEmpty } from 'lodash'

// Function to group the forecast data by each day as the list returned by the API is by the hour
export const groupForecastListByDate = (forecastList: Array<any>) => {
  return groupBy(forecastList, (item: any) =>
    moment.unix(item.dt).format('DDMMYYYY')
  )
}

// Function to get the labels for the temperature chart
export const getHourlyForecastLabels = (
  groupedForecast: any,
  index: number
) => {
  if (isEmpty(groupedForecast)) {
    return []
  } else {
    const day: Array<any> = groupedForecast[Object.keys(groupedForecast)[index]]
    return day.map((forecast) => moment.unix(forecast.dt).format('HH:mm'))
  }
}

// Function to get the temperature values for the temperature chart
export const getHourlyForecastTemperatures = (
  groupedForecast: any,
  index: number
) => {
  if (isEmpty(groupedForecast)) {
    return []
  } else {
    return groupedForecast[Object.keys(groupedForecast)[index]].map(
      (forecast: any) => forecast.main.temp
    )
  }
}
