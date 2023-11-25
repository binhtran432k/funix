import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// {{{ react-date-range css
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
// }}}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
