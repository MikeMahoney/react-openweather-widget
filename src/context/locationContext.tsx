import { TLocation } from 'hooks/openWeatherHooks'
import { createContext } from 'react'

const LocationContext = createContext<TLocation>({
  latitude: null,
  longitude: null
})

export default LocationContext
