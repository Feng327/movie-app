import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { fetchDataFromApi } from "./utils/api";
import { Provider } from "react-redux";
import { Store } from "@reduxjs/toolkit";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <App />
    </Provider>
);
