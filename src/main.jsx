//component import

import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import {Toaster} from "react-hot-toast"
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import store from "./REDUX/store.js";


// npx eslint . --ext .js,.jsx --fix

//css import

//library import

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <BrowserRouter>

  <Provider store={store}>
 
    <App />
  </Provider>
  <Toaster   position="top-center"/>
  </BrowserRouter>
);
