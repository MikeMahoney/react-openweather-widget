import axios from 'axios'
import { useEffect, useState } from 'react'

const API_KEY: string = 'c1ee94524d8f355300ffdf9489c9f76a'

export type TLocation = {
  latitude: number | null
  longitude: number | null
}

export const getLocationByCity = (city: string) => {
  const [location, setLocation] = useState<TLocation>({
    latitude: null,
    longitude: null
  })
  const [isLocationLoading, setIsLocationLoading] = useState<boolean>(true)

  useEffect(() => {
    setIsLocationLoading(true)
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
  }, [])

  return { location, isLocationLoading }
}

export const getWeatherByLocation = ({ latitude, longitude }: TLocation) => {
  const [weather, setWeather] = useState<any>({})
  const [isWeatherLoading, setIsWeatherLoading] = useState<boolean>(true)

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
  }, [isWeatherLoading])

  return { weather, isWeatherLoading, setIsWeatherLoading }
}
