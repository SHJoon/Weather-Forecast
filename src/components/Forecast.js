import React, { useState, useEffect } from "react";
import axios from "axios";

const Forecast = ({ isError, setIsError, forecast }) => {

  return (
    <div>
      <div>{forecast}</div>
    </div>
  );
};

export default Forecast;
