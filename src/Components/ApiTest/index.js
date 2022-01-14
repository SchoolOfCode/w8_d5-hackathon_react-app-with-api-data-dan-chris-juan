import React from "react";
import { useState, useEffect } from "react";

function ApiTest({ location }) {
  const [data, setData] = useState({});

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
    ]);
  }

  useEffect(() => {
    fetchData(location);
  }, [location]);

  return (
    <div>
      <h2>NO</h2>
      <p>{data[0]}</p>
      <p>{data[1]}°C</p>
      <p>{data[2]}</p>
      <p>{data[3]}</p>
    </div>
  );
}

export default ApiTest;
