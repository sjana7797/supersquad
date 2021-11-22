import React from "react";
import ReactDom from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";

//Custom CSS
import "./resources/styles/index.css";

//App Component Import
import App from "./components/App";

//Reducers
import rootReducer from "./redux/reducers/index";

//Creating store
const store = createStore(rootReducer);

ReactDom.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.querySelector("#root")
);
