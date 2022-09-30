import React, { useState } from 'react'
import { api_key, base_url } from '../units/constants';
import { WeatherInfo } from '../units/types';
import Form from './Form';
import Weather from './Weather';

const Data = () => {
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo>({
    message: 'Enter city name'
  });


  const getWeather = async (city: string) => {
    try {
      const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
      const data = await response.json();
      setWeatherInfo({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunset: data.sys.sunset,
        message: ''
      })
    } catch (e) {
      setWeatherInfo({
        message: 'Enter correct city name'
      })
    }
  }

  return (
    <div>
      <Form getWeather={getWeather} />
      <Weather info={weatherInfo} />
    </div>
  )

}

export default Data;