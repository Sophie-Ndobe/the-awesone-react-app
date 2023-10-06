import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";
import "./Search.css";
import CitiesPanel from "./CitiesPanel";

export default function Search() {
  const [city, setCity] = useState("Tokyo");
  const [weather, setWeather] = useState(" ");

  function displayWeather(response) {
    setWeather({
      city: response.data.city,
      temp: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "2c13e0a2b6fe347b0421bb02eef2o43t";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div className="Search">
      <CitiesPanel />
      <form onSubmit={handleSubmit}>
        <input type="Search" onChange={updateCity} />
        <button className="btn btn-primary mb-1">Search</button>
        <button className="btn btn-success ms-1 mb-1">Current</button>
      </form>
      <Weather
        city={weather.city}
        temp={weather.temp}
        humidity={weather.humidity}
        wind={weather.wind}
        descrip={weather.description}
      />
    </div>
  );
}
