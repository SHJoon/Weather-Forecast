import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';

import './App.css';

import Homepage from './views/Homepage';
import Weather from './views/Weather';

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [ location, setLocation ] = useState("");

  return (
    <div className="App">
      <Link>
        <Homepage path="/"/>
        <Weather path="/:city"/>
      </Link>
    </div>
  );
}

export default App;
