import "./App.css";
import CurrentWeather from "./components/current-weather/current-weather";
import Search from "./components/search/search";
import {WEATHER_API_URLİM,WEATHER_API_KEYİM} from "./components/search/api/api"
import { useState } from "react";
import Forecast from "./components/forecast/forecast";
function App() {
  const[currentWeatherdata,setCurrentWeatherdata]=useState(null);
  const[forecastdata,setForecastdata]=useState(null);

  const handleOnSearchChange = (searchData) => {
    //searchdata=kullanıcının inputa girdigi veya sectigi sehrin datası sadece sehrin label,population,region,value degerlerini iceriyor göndermiştik önceden!
console.log(searchData) // paris sehri
/* //searchData degeri:
{value: '-20.30361 -50.01472', label: 'Parisi, BR', population: 'Sehrin Nüfuzu:2169', region: 'Sehrin Bölgesi:São Paulo'}
*/
    //5
    //8
    const [latitude, longitude] = searchData.value.split(" ");

    //10
 const currentWeatherFetch=fetch(`${WEATHER_API_URLİM}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEYİM}`)
 //11 tahmin datası için sadece weather kısmı yerine forecast yazarak erişebilirsin
 const forecastFetch=fetch(`${WEATHER_API_URLİM}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEYİM}`)
  

 Promise.all([currentWeatherFetch, forecastFetch])
 .then(async (response) => {

   const weatherResponse = await response[0].json();
   const forcastResponse = await response[1].json();
     console.log(weatherResponse)
//fullinformation rapidapiden alınan sehrin bilgileriyle weatherapiden alınan weatherresponse datasını birleştirir.
//amac sehir adı yok weatherresponse da sehrin adını eklemek en son olusacak dataya
   const fullinformation={city:searchData.label,...weatherResponse}
   const fullinformationforecast={city:searchData.label,...forcastResponse}

   setCurrentWeatherdata(fullinformation);
   setForecastdata(fullinformationforecast);
 })
 .catch((error)=>{console.log(error)});
};
console.log(currentWeatherdata)
console.log(forecastdata) // forecastdata.list te o sehre ait tüm hava tahminlerinin dizisi var !

  return (
    <div className="App">
      <Search onSearchChange={handleOnSearchChange} /> {/** 4 */}
    
    {/**12 */}
    <CurrentWeather data={currentWeatherdata  }/>
   
   {/**14 */}
   <Forecast data={forecastdata}/>


   
    </div>
  );
}

export default App;

//1-npm i react-accessible-accordion
//2-npm install react-select-async-paginate@latest --save
//ters sıradada olur
