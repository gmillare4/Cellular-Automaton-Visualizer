import React from "react";
import "./index.css";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import TwoDRuleset from "./components/TwoDRuleset";

ReactDom.render(
  <Provider store={store}>
    <TwoDRuleset />
  </Provider>,
  document.getElementById("app") // Same id='app' in our static HTML
);
