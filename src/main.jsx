import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { CartProvider } from "./components/RSM/CartContext";
import { BrowserRouter } from "react-router-dom";
import "./components/App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/Naturio">
    <React.StrictMode>
      <CartProvider>
        <App />
      </CartProvider>
    </React.StrictMode>
  </BrowserRouter>
);
