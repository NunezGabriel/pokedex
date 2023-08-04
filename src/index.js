import React from "react";
import ReactDOM from "react-dom/client";
import { Global } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";

import App from "./app";
import { AuthProvider } from "./context/auth-context";
import { global, reset } from "./styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <Global styles={reset} />
      <Global styles={global} />
      <App />
    </AuthProvider>
  </BrowserRouter>
);
