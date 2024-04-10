import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { Store } from "./redux/Store";
import { AuthProvider } from "./utils/authContext/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <AuthProvider>
    <Provider store={Store}>
      <App />
    </Provider>
  </AuthProvider>
  // </React.StrictMode>
);
