import "./App.css";
import "./hover.css";
import ApiTest from "./Components/ApiTest";
import Input from "./Components/Input";
import React, { useState } from "react";

function App() {
  const [location, setLocation] = useState("London");

  function handleClick(location) {
    setLocation(location);
  }
  return (
    <div className="App">
      <h1 id="app-title">Is it Sunny?</h1>
      <h1>{location}</h1>
      <Input handleClick={handleClick} />
      <ApiTest location={location} />
    </div>
  );
}
export default App;
