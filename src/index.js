import "./stylesheet/libs/normalize.css";
import "./stylesheet/fonts.css";
import "./stylesheet/app.css";
import "./stylesheet/react-datetime.css";

import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route component={App} />
    </Router>
  </Provider>,
  document.getElementById("root"),
);
