import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "aos/dist/aos.css";
import "./index.css"; // custom CSS
import AOS from "aos";

AOS.init({
  duration: 1200, // animation duration
  once: true, // animate only once
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
