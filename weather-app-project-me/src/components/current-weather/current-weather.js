import matchers from "@testing-library/jest-dom/matchers";
import React from "react";
import "./currentweather.css";
const CurrentWeather = ({ data }) => {
  //13 datayı al ve istedigin verileri erişerek ekrana yazdır.
  console.log(data);
  return (
    data && (
      <div className="weather">
        <div className="top">
          <div>
            <p className="city information">{data.city}</p>
            <p className="weather-description">{data.weather[0].main}</p>
          </div>
          <img
            className="weather-icon"
            src={`icons/${data.weather[0].icon}.png`}
            alt="weather pic"
            
          />
        </div>
        <div className="bottom">
          <p className="tempature">Sıcaklık {Math.round(data.main.temp)}°C </p>
          <div className="details">
            <div className="parameter-row">
              <span className="parameter-label">Ayrıntılar</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Hissedilen</span>
              <span className="parameter-value">
                {Math.round(data.main.feels_like)}°C
              </span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Rüzgar Hızı</span>
              <span className="parameter-value">{data.wind.speed} m/s</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Nem Oranı</span>
              <span className="parameter-value">{data.main.humidity}%</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Basınç</span>
              <span className="parameter-value">{data.main.pressure}hPa</span>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default CurrentWeather;

//<img src='icons/03d.png' alt='weather' className='weather-icon'/>
