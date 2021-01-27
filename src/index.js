import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";
import "./styles/grid.css";
import "./styles/scroll.styles.css";
import "./styles/animation.css";
import App from "./App";
import allReducers from "./reducers/index";
import { createStore, compose, applyMiddleware } from "redux";
import axios from "axios";

import { Provider } from "react-redux";
import thunk from "redux-thunk";
import * as serviceWorker from "./serviceWorker";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

axios.defaults.baseURL = "https://resume-backend-api.herokuapp.com/";

const queryClient = new QueryClient();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(allReducers, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
