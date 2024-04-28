import { Provider } from "react-redux";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../App/App";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../Redux/rootReducer";

const store = configureStore({ reducer: rootReducer });

export const preloadedState = store.getState();

const ServerDOM = ({ url }: { url: string }) => (
  <Provider store={store}>
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  </Provider>
);

export const appMarkup = (url: string) =>
  ReactDOMServer.renderToString(ServerDOM({ url }));
