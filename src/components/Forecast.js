import React, { useState, useEffect } from "react";
import axios from "axios";

const Forecast = ({ isError, setIsError, city }) => {
  const [forecast, setForecast] = useState(null);
  const uriEncodedCity = encodeURIComponent(cityName);

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${uriEncodedCity}&appid=${process.env.REACT_APP_API_KEY}&units=${tempUnit}`
      )
      .then((res) => {
        console.log(res.data);
        setForecast(JSON.stringify(res.data));
      })
      .catch((err) => {
        console.error(err);
      });
  }, [cityName]);

  return (
    <div>
      <div>{forecast}</div>
    </div>
  );
};

export default Forecast;
