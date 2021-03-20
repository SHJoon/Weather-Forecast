import React, { useState, useEffect } from "react";
import axios from "axios";

import Search from "../components/Search";

const Forecast = (props) => {
  const { cityName } = props;
  const [city, setCity] = useState(null);

  useEffect(() => {
    axios
      .get(
        `api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setCity(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <Search />
    </div>
  );
};

export default Forecast;
