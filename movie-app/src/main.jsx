import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";

import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider>
        <App />
    </Provider>
);
