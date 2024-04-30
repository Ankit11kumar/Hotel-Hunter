import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App/App";
import reportWebVitals from "./reportWebVitals";
import { initStore } from "./Redux/store";
import { BrowserRouter } from "react-router-dom";

interface Window extends globalThis.Window {
  __PRELOADED_STATE__?: any;
}

const preloadedState = (window as Window).__PRELOADED_STATE__;
delete (window as Window).__PRELOADED_STATE__;

const store = initStore(preloadedState);

const rootJSX = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

const root = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(root).render(rootJSX);
// ReactDOM.hydrateRoot(root, rootJSX);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
