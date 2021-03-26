import React, { useState, useEffect } from "react";
import axios from "axios";

import Search from "../components/Search";

const Forecast = ({ tempUnit, cityName, isValid, setIsValid }) => {
  const [city, setCity] = useState(null);
  const uriEncodedCity = encodeURIComponent(cityName);

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${uriEncodedCity}&appid=${process.env.REACT_APP_API_KEY}&units=${tempUnit}`
      )
      .then((res) => {
        console.log(res.data);
        setCity(JSON.stringify(res.data));
      })
      .catch((err) => {
        console.error(err);
      });
  }, [cityName]);

  return (
    <div>
      <Search setIsValid={setIsValid} />
      <div>{city}</div>
    </div>
  );
};

export default Forecast;
