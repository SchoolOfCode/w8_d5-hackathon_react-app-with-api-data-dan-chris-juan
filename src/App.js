import "./App.css";
import ApiTest from "./Components/ApiTest";
import Input from "./Components/Input";
import React, { useState } from "react";

export function handleText(location) {
  setLocation(location);
}
function App() {
  const [location, setLocation] = useState("");

  return (
    <div className="App">
      <h1>Is it Sunny?</h1>
      <Input />
      <ApiTest location={location} />
    </div>
  );
}

export default App;
