import React, { ChangeEvent, useState } from 'react';

interface Props {
    getWeather: (city: string) => void
}

const Form = ({ getWeather }: Props) => {
    const [city, setCity] = useState('');

    const handleClick = () => {
        getWeather(city);
        setCity('');
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
    }

    return (
        <div>
            <input
                onChange={handleChange}
                type='text'
                placeholder='City'
                value={city}
            />
            <button onClick={handleClick}>Get weather</button>
        </div>
    )

}

export default Form