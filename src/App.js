import React from "react";
import "./styles.css";

import Wrapped from "./components/Wrapped";
import WrappedComponent from "./components/WrappedComponent";

export default function App() {
  return (
    <div className="App">
      <Wrapped />
      <WrappedComponent />
    </div>
  );
}
