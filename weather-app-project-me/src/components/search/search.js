import React from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import { GEO_API_URL, geoApiOptions } from "./api/api"; //4

const Search = ({ onSearchChange }) => {
  //3
  const [search, setSearch] = useState("paris");

  const loadOptions = async (inputValue) => {
    //3
    const response = await fetch(
      //6
      `${GEO_API_URL}/cities?minPopulation=1000&namePrefix=${inputValue}`,
      geoApiOptions
    );
    const response_1 = await response.json(); //Bize lazım olan datadaki sehrin adı ve koordinatları sadece onu döndürüyoruz
    return {
      options: response_1.data.map((city) => {
        return {
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.countryCode}`,
          population: `Sehrin Nüfuzu:${city.population}`,
          region: `Sehrin Bölgesi:${city.region}`,
        };
      }),
    };
  };

  const handleOnChange = (searchData) => {
    //2
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    //1
    <AsyncPaginate
      placeholder="Şehir Arayınız"
      debounceTimeout={200}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;

//7-openweather services bolumu free current weather
/*
  https://openweathermap.org/current //yapabilirsin buradanda
  */
