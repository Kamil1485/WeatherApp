import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";

//Hava Durumu Tahmini Bölümü
const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();//kullanıcının erişmeye calıstıgı tarihin günü 
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    //data yoksa datayı erişmeye çalışıp, hata almaması için && operatörüyle conditional rendering işlemi
    data && (
      <div>
        <label className="title">Günlük Tahmin</label>
        <Accordion allowZeroExpanded>
          {data.list.splice(0, 7).map((item, idx) => (
            <AccordionItem key={idx}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="daily-item">
                    <img
                      src={`icons/${item.weather[0].icon}.png`}
                      className="icon-small"
                      alt="weather"
                    />
                    <label className="day">{forecastDays[idx]}</label>
                    <label className="description">
                      {item.weather[0].description}
                    </label>
                    <label className="min-max">
                      {Math.round(item.main.temp_max)}°C /
                      {Math.round(item.main.temp_min)}°C
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="daily-details-grid">
                  <div className="daily-details-grid-item">
                    <label>Basınç:</label>
                    <label>{item.main.pressure}</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Nem Oranı:</label>
                    <label>{item.main.humidity}</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Butululuk:</label>
                    <label>{item.clouds.all}%</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Rüzgar Hızı:</label>
                    <label>{item.wind.speed} m/s</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Deniz Seviyesi:</label>
                    <label>{item.main.sea_level}m</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Hissedilen :</label>
                    <label>{item.main.feels_like}°C</label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    )
  );
};

export default Forecast;
