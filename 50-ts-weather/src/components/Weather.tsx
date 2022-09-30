import React from 'react'
import { WeatherInfo } from '../units/types'

interface Props {
  info: WeatherInfo
}

const Weather = (props: Props) => {
  const { message, country, city, pressure, sunset, temp } = props.info;
  return (
    <div className='infoWeath'>
      {!message &&
        <div>
          <p>Location: {country}, {city}</p>
          <p>Temp: {temp}</p>
          <p>Pressure: {pressure}</p>
          <p>Sunset: {new Date(sunset! * 1000).toLocaleTimeString()}</p>
        </div>}
      <p>{message}</p>
    </div>
  )

}

export default Weather