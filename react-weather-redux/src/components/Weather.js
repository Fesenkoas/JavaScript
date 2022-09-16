import React from "react";
import { useSelector } from "react-redux";

const Weather = () => {
  const { info, message } = useSelector((state) => state.weather);
  return (
    <div className="infoWeath">
      {!message && (
        <div>
          <p>
            Location: {info.country}, {info.city}
          </p>
          <p>Temp: {info.temp}</p>
          <p>Pressure: {info.pressure}</p>
          <p>Sunset: {info.sunset}</p>
        </div>
      )}
      <p>{message}</p>
    </div>
  );
};

export default Weather;
