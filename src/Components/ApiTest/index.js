/** @format */

import React from "react";
import { useState, useEffect } from "react";

function ApiTest({ location }) {
  const [apiData, setData] = useState({});

  async function fetchData(location) {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=S2J5XERMPPNGC2NRCCYC5J3CH&contentType=json`
    );
    const data = await response.json();
    setData([
      data.description,
      data.days[0].temp,
      data.days[0].datetime,
      data.resolvedAddress,
      data.days[0].icon,
    ]);
  }

  useEffect(() => {
    fetchData(location);
    // console.log(apiData[3]);
  }, [location]);

  return (
    <div>
      <h2>NO</h2>

      <p>{apiData[0]}</p>
      <p>{apiData[1]}°C</p>
      <p>{apiData[2]}</p>
      <p>{apiData[3]}</p>
    </div>
  );
}

export default ApiTest;
