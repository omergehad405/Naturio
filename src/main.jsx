import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { CartProvider } from "./components/RSM/CartContext";

import "./components/App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
