import axios from 'axios'
import { useEffect, useState } from 'react'

const API_KEY: string = 'c1ee94524d8f355300ffdf9489c9f76a'

type TLocation = {
  latitude: number
  longitude: number
}

export const getWeatherData = (city: string) => {
  const [weatherData, setWeatherData] = useState({})
  const [isWeatherDataLoading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        const location = await getLocationDataByCity(city).then((response) => {
          const locationData = {
            latitude: 0,
            longitude: 0
          }
          if (
            response.data.length &&
            response.data[0].lat &&
            response.data[0].lon
          ) {
            locationData.latitude = response.data[0].lat
            locationData.longitude = response.data[0].lon
          }

          return locationData
        })
        const weather = await getWeatherDataByLocation(location).then(
          (response) => response.data
        )
        console.log(location, weather)
        setWeatherData(weather)
      } catch (e) {
        console.error(e)
      }
    }
    fetchData()
  }, [])

  return { weatherData, isWeatherDataLoading }
}

export const getLocationDataByCity = async (city: string) => {
  return axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&&appid=${API_KEY}`
  )
}

export const getWeatherDataByLocation = async ({
  latitude,
  longitude
}: TLocation) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
  )
}
