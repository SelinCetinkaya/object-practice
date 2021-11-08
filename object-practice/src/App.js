import React from "react";
import "./App.css";
import Array from "./Array";
import NestedObject from "./NestedObject";

function App() {
  return (
    <div className="body">
      <h1 className="header-name">header name here</h1>
      <div className="App">
        <Array />
        <NestedObject />
      </div>
    </div>
  );
}

export default App;
