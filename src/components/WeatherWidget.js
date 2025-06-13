import React, { useEffect, useState } from "react";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const city = process.env.REACT_APP_CITY;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch weather");
        }
        return response.json();
      })
      .then((data) => setWeather(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!weather || !weather.weather || !weather.weather[0]) return <p>Loading weather...</p>;

  return (
    <div className="weather-box">
      <h3>Weather in {weather.name}</h3>
      <p>{weather.weather[0].description}</p>
      <p>Temperature: {weather.main.temp} °C</p>
    </div>
  );
};

export default Weather;
