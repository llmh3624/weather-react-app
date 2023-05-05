import React from "react";

export default function WeatherForecastDay(props) {
  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="forecast-time">{day()}</div>
      <img
        src={props.data.condition.icon_url}
        alt={props.data.condition.icon}
        className="Icon-forecast"
        width="90px"
      />
      <div className="forecast-temperature">
        <span className="forecast-temperature-min">
          {minTemperature()} {"  "}
        </span>
        <span className="forecast-temperature-max">
          {"  "} {maxTemperature()}
        </span>
      </div>
    </div>
  );
}
