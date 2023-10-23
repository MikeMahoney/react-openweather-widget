import axios from 'axios'
import { groupForecastListByDate } from 'logic/forecastLogic'
import { useEffect, useState } from 'react'

export const API_KEY: string = 'c1ee94524d8f355300ffdf9489c9f76a'

export type TLocation = {
  latitude: number | null
  longitude: number | null
}

// Get the Location data based on the city prop
// Returns the latitude and longitude which is required for API calls that are based on a location
export const getLocationByCity = (city: string) => {
  const [location, setLocation] = useState<TLocation>({
    latitude: null,
    longitude: null
  })
  const [isLocationLoading, setIsLocationLoading] = useState<boolean>(true)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&&appid=${API_KEY}`
      )
      .then((response) => {
        if (
          response.data.length &&
          response.data[0].lat &&
          response.data[0].lon
        ) {
          setLocation({
            latitude: response.data[0].lat,
            longitude: response.data[0].lon
          })
        }
        setIsLocationLoading(false)
      })
      .catch(function (error) {
        let message = 'Fetching location data'
        if (error.response?.data?.message) {
          console.log(error.response.data)
          message = error.response.data.message
        }
        setErrorMessage(message)
        setIsLocationLoading(false)
      })
  }, [])

  return { location, isLocationLoading, errorMessage }
}

// Get the Weather data based on the lat/long of the city
export const getWeatherByLocation = ({ latitude, longitude }: TLocation) => {
  const [weather, setWeather] = useState<any>({})
  const [isWeatherLoading, setIsWeatherLoading] = useState<boolean>(true)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
      )
      .then((response) => {
        if (response.data) {
          setWeather(response.data)
        }
        setIsWeatherLoading(false)
      })
      .catch(function (error) {
        let message = 'Fetching weather data'
        if (error.response?.data?.message) {
          console.log(error.response.data)
          message = error.response.data.message
        }
        setErrorMessage(message)
        setIsWeatherLoading(false)
      })
  }, [isWeatherLoading])

  return { weather, isWeatherLoading, setIsWeatherLoading, errorMessage }
}

// Fetch the Forecast data based on the lat/lon of the city
// Returns the raw forecast data and forecast data grouped by day
export const getForecastByLocation = ({ latitude, longitude }: TLocation) => {
  const [forecast, setForecast] = useState<any>({})
  const [groupedForecast, setGroupedForecast] = useState<any>({})
  const [isForecastLoading, setIsForecastLoading] = useState<boolean>(true)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
      )
      .then((response) => {
        if (response.data) {
          const groupedForecast = groupForecastListByDate(response.data.list)
          setGroupedForecast(groupedForecast)
          setForecast(response.data)
        }
        setIsForecastLoading(false)
      })
      .catch(function (error) {
        let message = 'Fetching forecast data'
        if (error.response?.data?.message) {
          console.log(error.response.data)
          message = error.response.data.message
        }
        setErrorMessage(message)
        setIsForecastLoading(false)
      })
  }, [])

  return {
    forecast,
    groupedForecast,
    isForecastLoading,
    errorMessage
  }
}
