import React, { useState } from "react";
import { navigate } from "@reach/router";

const Search = () => {
  const [city, setCity] = useState("");
  const [tempUnit, setTempUnit] = useState("imperial");

  return (
    <div>
      <form onSubmit={navigate(`/${city}`)}>
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

        <input type="submit">Retrieve forecast information</input>
      </form>
    </div>
  );
};

export default Search;
