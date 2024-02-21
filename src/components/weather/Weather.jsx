import React from "react";
import "./Weather.css";
import dateData from "../../assets/data/dateData";
import WeatherTile from "../weather-tile/WeatherTile";

export default function Weather({ weatherData }) {
  const date = new Date();
  const month = date.getMonth();
  const day = date.getDay();
  // console.log(weatherData);
  // console.log(weatherData);
  return (
    <div className="weather-container">
      <section className="text-center">
        <h3>Today</h3>
        <p className="date m-1">
          {dateData.month[month]} {date.getDate()}, {dateData.day[day]},{" "}
          {date.getFullYear()}
        </p>
        {weatherData&&<>
          <div className="weather-icon-container">
          <div>
            <img className="weather-icon" src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" />
          </div>
          {<div className="temperature">
            <sup className="temp-unit">{weatherData.main.temp}°C</sup>
          </div>}
        </div>
        <div className="weather-text">
          {weatherData.weather[0].main}, {weatherData.weather[0].description}
          </div>
        <div className="m-1 location">
          <i className="fa-solid fa-location-dot"></i> {weatherData.name}, {weatherData.sys.country}
        </div>
        </>}
      </section>
      {weatherData&&<>
        <section className="weather-tiles-container d-flex justify-evenly flex-wrap">
        <WeatherTile icon="fa-solid fa-wind" title="Wind speed" value={`${weatherData.wind.speed} m/s`} />
        <WeatherTile icon="bi bi-moisture" title="Humidity" value={`${weatherData.main.humidity} %`} />
      </section>
      </>}
    </div>
  );
}
