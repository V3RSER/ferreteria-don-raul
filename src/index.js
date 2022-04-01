import React, { StrictMode } from "react";
import { render } from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap';
import "./assets/css/index.css";

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
