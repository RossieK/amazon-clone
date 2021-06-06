import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {StateProvider} from "./StateProvider";
import {initialState, reducer} from "./reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
