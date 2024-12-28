import { Box } from "@mui/material";
import "./Hero.scss";
import { useState } from "react";

const api = {
  key: "67fc54d54aeffd93c65624f2c90222dc",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Hero() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const [error, setError] = useState(null);

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.cod === 200) {
          setWeather(result);
          setError(null);
          console.log(result);
        } else {
          setError(result.message);
          setWeather({});
        }
      })
      .catch((err) => {
        setError("An error occurred while fetching the data.");
        setWeather({});
      });
  };

  return (
    <div className="hero">

      <div className="hero__weather">
        {/* Search box */}
        <input
          type="text"
          placeholder="Enter city/town..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={searchPressed}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}

      {weather.name && (
        <div className="weather-info">
          <p className="city-name">{weather.name}</p>

          <p className="temperature">
            Temperature: {weather.main && weather.main.temp ? `${weather.main.temp}°C` : "Temperature data not available"}
          </p>

          {weather.main && (
            <>
              <p className="humidity">Humidity: {weather.main.humidity}%</p>
            </>
          )}

          {weather.weather && weather.weather[0] && (
            <p className="description">({weather.weather[0].description})</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Hero;
