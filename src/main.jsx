//React
import { StrictMode } from "react";

//react-dom
import { createRoot } from "react-dom/client";

//react-router-dom
import { BrowserRouter } from "react-router-dom";

//App
import App from "./App.jsx";

//Styles
import "./global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
