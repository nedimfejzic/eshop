import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./assets/main.css";

import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
