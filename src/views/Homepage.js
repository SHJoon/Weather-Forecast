import React, { useState, useEffect } from "react";

import Search from '../components/Search';

const Homepage = () => {
  return (
    <div>
      <h1>Weather Forecast</h1>
      <Search />
    </div>
  );
};

export default Homepage;
