import React, { useState, useEffect } from 'react';
import { Router } from '@reach/router';

import './App.css';

import Homepage from './views/Homepage';
import Forecast from './views/Forecast';

function App() {
  // const API_KEY = process.env.REACT_APP_API_KEY;
  const [ location, setLocation ] = useState("");

  return (
    <div className="App">
      <Router>
        <Homepage path="/"/>
        <Forecast path="/:cityName"/>
      </Router>
    </div>
  );
}

export default App;
