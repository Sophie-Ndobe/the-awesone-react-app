import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";
import "./Search.css";
import CitiesPanel from "./CitiesPanel";
import WeatherForecast from "./WeatherForecast";

export default function Search() {
  const [city, setCity] = useState("Tokyo");
  const [weather, setWeather] = useState(" ");
  const [forecast, setForecast] = useState(" ");

  function displayWeather(response) {
    setWeather({
      city: response.data.city,
      temp: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      lat: response.data.coordinates.latitude,
      lon: response.data.coordinates.longitude,
      time: response.data.time,
    });
  }

  function displayWeatherForecast(response) {
    console.log(response);
    setForecast({
      daily0: Math.round(response.data.daily[0].temperature.day),
      icon0: response.data.daily[0].condition.icon_url,
      time0: response.data.daily[0].time,
      daily1: Math.round(response.data.daily[1].temperature.day),
      icon1: response.data.daily[1].condition.icon_url,
      time1: response.data.daily[1].time,
      daily2: Math.round(response.data.daily[2].temperature.day),
      icon2: response.data.daily[2].condition.icon_url,
      time2: response.data.daily[2].time,
      daily3: Math.round(response.data.daily[3].temperature.day),
      icon3: response.data.daily[3].condition.icon_url,
      time3: response.data.daily[3].time,
      daily4: Math.round(response.data.daily[4].temperature.day),
      icon4: response.data.daily[4].condition.icon_url,
      time4: response.data.daily[4].time,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "2c13e0a2b6fe347b0421bb02eef2o43t";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);

    // let forecastApi = `https://api.shecodes.io/weather/v1/forecast?lon=${weather.lon}&lat=${weather.lat}&key=${apiKey}&units=metric`;
    let forecastApi = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(forecastApi).then(displayWeatherForecast);
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
      <WeatherForecast
        forecast0={forecast.daily0}
        forecast1={forecast.daily1}
        forecast2={forecast.daily2}
        forecast3={forecast.daily3}
        forecast4={forecast.daily4}
        time0={forecast.time0}
        time1={forecast.time1}
        time2={forecast.time2}
        time3={forecast.time3}
        time4={forecast.time4}
        icon0={forecast.icon0}
        icon1={forecast.icon1}
        icon2={forecast.icon2}
        icon3={forecast.icon3}
        icon4={forecast.icon4}
      />
    </div>
  );
}
