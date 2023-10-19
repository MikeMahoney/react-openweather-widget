import { useEffect, useState } from 'react'

export const fetchWeatherDataByLocation = () => {
  const [weatherData, setWeatherData] = useState([])
  const [isLoading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setLoading(true)
    fetch(
      'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
    )
      .then((data) => {
        console.log(data)
        setWeatherData(data)
      })
      .finally(() => setLoading(false))
  }, [])

  return { weatherData, isLoading }
}
