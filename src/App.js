import React from "react";
import "./Background.css";
import Home from "./components/Home";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import Reducer from "./redux/Reducer";
import reduxThunk from "redux-thunk";

const loggerMiddleware = store => next => action => {
  const result = next(action);
  return result;
};

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore(
  Reducer,
  composeEnhancers(applyMiddleware(loggerMiddleware, reduxThunk))
);

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
