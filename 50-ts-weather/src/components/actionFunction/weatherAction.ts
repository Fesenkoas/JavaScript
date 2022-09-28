
import { api_key, base_url } from '../../units/constants';
import {loading, setWeather } from '../reducer/weatherReducer';

export const  fetchWeatherAction = (city) =>{
    return dispatch =>{
        dispatch(loading('Loading...'))
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
        .then(responce => responce.json())
        .then(body => dispatch(setWeather(body)))
        .catch(e => dispatch(loading('There is no such city. Please enter a valid city name')))
    }
}