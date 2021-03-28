import React, { useState, useEffect } from "react";

import Search from "../components/Search";
import Forecast from "../components/Forecast";

const Homepage = () => {
  const [isError, setIsError] = useState(false);
  const [city, setCity] = useState("");

  return (
    <div>
      <h1>Weather Forecast</h1>
      <Search setIsError={setIsError} setCity={setCity} />
      {/* {
        isError ? <Error /> : <Forecast />
      } */}
    </div>
  );
};

export default Homepage;
