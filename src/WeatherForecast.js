import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day"> hu</div>
          <WeatherIcon code="01d" size={80} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°C</span>
            <span className="WeatherForecast-temperature-min">10°F</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatherForecast-day"> hu</div>
          <WeatherIcon code="01d" size={80} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°C</span>
            <span className="WeatherForecast-temperature-min">10°F</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatherForecast-day"> hu</div>
          <WeatherIcon code="01d" size={80} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°C</span>
            <span className="WeatherForecast-temperature-min">10°F</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatherForecast-day"> hu</div>
          <WeatherIcon code="01d" size={80} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°C</span>
            <span className="WeatherForecast-temperature-min">10°F</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatherForecast-day"> hu</div>
          <WeatherIcon code="01d" size={80} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°C</span>
            <span className="WeatherForecast-temperature-min">10°F</span>
          </div>
        </div>
      </div>
    </div>
  );
}