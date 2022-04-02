import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import React, { Suspense } from "react";

import "./i18n";
import App from "./App";
import store from "./redux/store";

import "./index.css";

ReactDOM.render(
  <Suspense fallback={<p>Loading...</p>}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>,
  document.getElementById("root")
);
