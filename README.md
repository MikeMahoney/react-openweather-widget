# react-openweather-widget

## Technologies

Project is created with:

- React
- Typescript
- SASS
- Axios
- OpenWeather API
- react-chartjs-2
- lodash
- momment

## Setup

To run this project, install it locally using npm:

```
$ cd ../react-openweather-widget
$ npm install
$ npm start

```

## Using the component

```
import WeatherWidget from '../WeatherWidget/WeatherWidget'

...

return (
    <div className='wrapper'>
      <WeatherWidget city='London' />
    </div>
  )

```
- Import the component from its directory, then include it in your React component JSX
- A city string prop must be provided as the location of the weather data
- The component has no set width so it fills the parent wrapper, set width on the wrapper if its required
- The component displays the current weather information for the city provided
- It also includes a line chart that can display the temperature forecasts for the next 5 days
- The widget also displays a darker shed of blue between 6pm and 6am

## Notes
- Ideally if the component was to be served from an npm repo there would be a 'apiKey' prop so users could use their own OpenWeather account but for the purpose of this app it's hardcoded
- There are unfortunately 'any' types in the code for the OpenWeather data objects as it would take too much time to define them all and which values were needed wasn't initially clear. Ideally in a commercial app I would fully define these types based on the business requirements
- The react-chartjs-2 line chart in the app isn't as responsive as I'd like it to be as its seems to only resize on a rerender
