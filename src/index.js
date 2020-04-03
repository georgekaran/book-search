import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Main from "./pages/Main/Main";
import { StateProvider } from "./context/Context";
import appReducer, { appDefaultState } from "./reducer/appReducer";

import "./assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-dashboard-react.scss";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={appDefaultState} reducer={appReducer}>
      <Main />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
