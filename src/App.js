import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";

import "./App.css";

import Homepage from "./views/Homepage";

function App() {
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
