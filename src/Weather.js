import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Pretoria</h1>
      <ul>
        <li>Thursday 19:39</li>
        <li>Clear Skies</li>
      </ul>
      <div className="row">
        <div className="col">
          <div className="d-flex">
            <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" />
            <h2>22°</h2>
          </div>
        </div>
        <div className="col">
            <ul>
                <li>Humidity: 55%</li>
                <li>Wind: 4km/h</li>
            </ul>
        </div>
      </div>
    </div>
  );
}
