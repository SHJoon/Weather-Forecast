import React, { useState } from "react";

import Search from "../components/Search";
import Forecast from "../components/Forecast";
import InputError from "../components/InputError";

const Homepage = () => {
  const [isError, setIsError] = useState(false);
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState(null);

  return (
    <div>
      <h1>Weather Forecast</h1>
      <Search
        setIsError={setIsError}
        city={city}
        setCity={setCity}
        setForecast={setForecast}
      />
      {isError && <InputError />}
      {/* <Forecast forecast={forecast} /> */}
    </div>
  );
};

export default Homepage;
