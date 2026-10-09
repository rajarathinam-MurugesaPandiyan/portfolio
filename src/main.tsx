import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { applyTheme, getSavedTheme } from "./theme";
import "./index.css";
import App from "./App.tsx";

// Initialize saved theme immediately on app load
applyTheme(getSavedTheme());

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
