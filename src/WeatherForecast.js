import React from "react";
import "./WeatherForecast.css";

export default function ForecastDate(props) {
  let date0 = new Date(props.time0 * 1000);
  let date1 = new Date(props.time1 * 1000);
  let date2 = new Date(props.time2 * 1000);
  let date3 = new Date(props.time3 * 1000);
  let date4 = new Date(props.time4 * 1000);

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  let day0 = days[date0.getDay()];
  let day1 = days[date1.getDay()];
  let day2 = days[date2.getDay()];
  let day3 = days[date3.getDay()];
  let day4 = days[date4.getDay()];

  let weatherForecast0 = props.forecast0;
  let weatherForecast1 = props.forecast1;
  let weatherForecast2 = props.forecast2;
  let weatherForecast3 = props.forecast3;
  let weatherForecast4 = props.forecast4;
 
   

  let conditions0 = [day0, weatherForecast0];
  let conditions1 = [day1, weatherForecast1];
  let conditions2 = [day2, weatherForecast2];
  let conditions3 = [day3, weatherForecast3];
  let conditions4 = [day4, weatherForecast4];

  

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div>
            {conditions0.map(function (condition, index) {
              return <div key={index}>{condition}</div>;
            })}
          </div>
        </div>
        <div className="col">
          <div>
            {conditions1.map(function (condition, index) {
              return <div key={index}>{condition}</div>;
            })}
          </div>
        </div>
        <div className="col">
          <div>
            {conditions2.map(function (condition, index) {
              return <div key={index}>{condition}</div>;
            })}
          </div>
        </div>
        <div className="col">
          <div>
            {conditions3.map(function (condition, index) {
              return <div key={index}>{condition}</div>;
            })}
          </div>
        </div>
        <div className="col">
          <div>
            {conditions4.map(function (condition, index) {
              return <div key={index}>{condition}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
