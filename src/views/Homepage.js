import React, { useState, useEffect } from "react";

import Search from "../components/Search";

const Homepage = ({ isValid, setIsValid }) => {
  return (
    <div>
      <h1>Weather Forecast</h1>
      <Search setIsValid={setIsValid} />
    </div>
  );
};

export default Homepage;
