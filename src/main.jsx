import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./assets/scss/main.scss";
import { SavedProvider } from "./contexts/SavedContext.jsx";

createRoot(document.getElementById("root")).render(
  <SavedProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SavedProvider>
);
