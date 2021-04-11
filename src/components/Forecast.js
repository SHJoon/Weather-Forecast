import React from "react";

const Forecast = ({ forecast }) => {
  return (
    <div>
      {forecast?.cod === 200 ? (
        <div>
          <h3>{forecast.name}</h3>
          <p>
            It is currently {Math.round(forecast.main.temp)} degrees out with{" "}
            {forecast.weather[0].description}.
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Forecast;
