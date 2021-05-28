import { configureStore } from "@reduxjs/toolkit";
import { createStore, applyMiddleware } from "redux";

import reducers from "../reducers/reducers";

// const store = configureStore({ reducer: reducers });
const store = createStore(reducers);

console.log("ddddd", store);

export default store;
