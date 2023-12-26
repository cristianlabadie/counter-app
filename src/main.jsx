import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./style.css";
import { CounterApp } from "./components/CounterApp";
import { FirstApp } from "./components/FirstApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <FirstApp title="Estoy creando una app en react" /> */}
    <CounterApp value={50} />
  </React.StrictMode>,
);
