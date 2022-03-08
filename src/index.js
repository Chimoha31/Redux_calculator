import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./redux/reducers";

const Store = createStore(reducer);

ReactDOM.render(
  // <Providerで囲み、storeをその中に置く事によってReduxの情報がReactと連携されるという形になる。>
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
