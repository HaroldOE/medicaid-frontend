import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./contextapi/AuthContext.jsx";
import { DataProvider } from "./contextapi/DataContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <DataProvider>
      <App />
    </DataProvider>
  </AuthProvider>
);
