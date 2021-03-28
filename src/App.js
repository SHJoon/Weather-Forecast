import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";

import "./App.css";

import Homepage from "./views/Homepage";

function App() {
  return (
    <div className="App">
      <Homepage />
      {/* <Router>
        <Homepage path="/" isValid={isValid} setIsValid={setIsValid} />
        <Forecast
          path="/:tempUnit/:cityName"
          isValid={isValid}
          setIsValid={setIsValid}
        />
      </Router> */}
    </div>
  );
}

export default App;
