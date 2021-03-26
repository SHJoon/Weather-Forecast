import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";

import "./App.css";

import Homepage from "./views/Homepage";
import Forecast from "./views/Forecast";

function App() {
  const [isValid, setIsValid] = useState(true);

  return (
    <div className="App">
      <Router>
        <Homepage path="/" isValid={isValid} setIsValid={setIsValid} />
        <Forecast
          path="/:tempUnit/:cityName"
          isValid={isValid}
          setIsValid={setIsValid}
        />
      </Router>
    </div>
  );
}

export default App;
