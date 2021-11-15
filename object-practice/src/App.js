import React from "react";
import "./App.css";
import Array from "./Array";
import NestedObject from "./NestedObject";
import { useEffect, useState } from "react";

function App() {
  const [headerName, setHeaderName] = useState("click on a name to change");

  useEffect(() => {
    console.log("changed")
  }, [headerName]);

  return (
    <div className="body">
      <h1 className="header-name">{headerName}</h1>
      <div className="App">
        <Array setHeaderName={setHeaderName} />
        <NestedObject setHeaderName={setHeaderName} />
      </div>
    </div>
  );
}

export default App;
