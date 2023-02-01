import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { WorkoutContextProvider } from "../src/context/WorkoutContext";
import { AuthContextProvider } from "../src/context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <WorkoutContextProvider>
        <App />
      </WorkoutContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
