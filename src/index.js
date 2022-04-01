import React, { StrictMode } from "react";
import { render } from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./assets/styles/index.sass";

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
