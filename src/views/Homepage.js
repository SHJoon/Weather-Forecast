import React, { useState, useEffect } from "react";

import Search from "../components/Search";
import Forecast from "../components/Forecast";

const Homepage = () => {
  const [isError, setIsError] = useState(false);
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState(null);

  return (
    <div>
      <h1>Weather Forecast</h1>
      <Search setIsError={setIsError} city={city} setCity={setCity} setForecast={setForecast}/>
      {/* {
        isError ? <Error /> : <Forecast forecast={forecast} />
      } */}
    </div>
  );
};

export default Homepage;
