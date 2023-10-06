import React from "react";
import "./Weather.css";
import DateUpdate from "./DateUpdate";

export default function Weather(props) {
  return (
    <div className="Weather">
      <h1>{props.city}</h1>
      <ul>
        <li>
          <DateUpdate />
        </li>
        <li className="description">{props.descrip}</li>
      </ul>
      <div className="row">
        <div className="col">
          <div className="d-flex">
            <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" />
            <h2>{props.temp}</h2>
            <span>°C</span>
          </div>
        </div>
        <div className="col">
          <ul>
            <li>
              Humidity: <strong>{props.humidity}</strong>%
            </li>
            <li>
              Wind: <strong>{props.wind}</strong>km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
