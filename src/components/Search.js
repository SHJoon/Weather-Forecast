import React, { useState } from "react";
import { navigate } from "@reach/router";

const Search = ({ setIsError, setCity }) => {
  const [city, setCity] = useState("");
  const [tempUnit, setTempUnit] = useState("imperial");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.length !== 0) {
      setIsError(true);
      navigate(`/${tempUnit}/${city}`);
    } else {
      setIsError(false);
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
