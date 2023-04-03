import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Paris",
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl:
      "https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v3/Condition_Card/ModerateRainV2.svg",
    humidity: 59,
    wind: 3,
    temperature: 18,
  };

  return (
    <div className="Weather">
      <div className="card-body">
        <form className="search-form">
          <input
            type="search"
            placeholder="Enter a city..."
            autofocus="on"
            autoComplete="off"
            className="enter-city"
          />
          <input type="submit" value="Search" className="btn btn-primary" />
          <button className="btn btn-success">Current</button>
        </form>
        <div className="weather-app col-6">
          <div className="overview">
            <h1>{weatherData.city}</h1>
            <br />
            <ul>
              <li>Last updated: {weatherData.date}</li>
              <li>{weatherData.description}</li>
            </ul>
            <div className="row">
              <div className="col-6">
                <div className="clearfix weather-temperature">
                  <br />
                  <img
                    src={weatherData.imgUrl}
                    alt={weatherData.description}
                    className="float-left"
                  />
                  <div className="float-left">
                    <strong>{weatherData.temperature}</strong>
                    <span className="units"> °C</span>
                  </div>
                </div>
              </div>

              <div className="col-9">
                <ul>
                  <li>
                    <em>Humidity: {weatherData.humidity} %</em>
                  </li>
                  <li>
                    <em>Wind: {weatherData.wind} km/h</em>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <small>
        This project was coded by Antonina Dulama and is
        <a href="https://github.com/DulamaA/my-weather-project" target="blank">
          open-source code on GitHub
        </a>
      </small>
    </div>
  );
}
