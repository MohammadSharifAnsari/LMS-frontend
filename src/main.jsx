//component import

import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {Toaster} from "react-hot-toast"
import App from "./App.jsx";

// npx eslint . --ext .js,.jsx --fix

//css import

//library import

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    
    <App />
  <Toaster/>
  </BrowserRouter>
);
