import React, { useState } from "react";
import { navigate } from "@reach/router";
import axios from "axios";

const Search = ({ setIsError, setCity }) => {
  const [city, setCity] = useState("");
  const [tempUnit, setTempUnit] = useState("imperial");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.length !== 0) {
      setIsError(false);
      let uriEncodedCity = encodeURIComponent(cityName);
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${uriEncodedCity}&appid=${process.env.REACT_APP_API_KEY}&units=${tempUnit}`
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
      // navigate(`/${tempUnit}/${city}`);
    } else {
      setIsError(true);
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Enter city name."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <label>
          <input
            type="radio"
            name="unit"
            checked={tempUnit === "imperial"}
            value="imperial"
            onChange={(e) => setTempUnit(e.target.value)}
          />
          F
        </label>
        <label>
          <input
            type="radio"
            name="unit"
            checked={tempUnit === "metric"}
            value="metric"
            onChange={(e) => setTempUnit(e.target.value)}
          />
          C
        </label>

        <input type="submit" value="Retrieve forecast information" />
      </form>
    </div>
  );
};

export default Search;
