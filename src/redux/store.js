import { createStore, applyMiddleware } from "redux";
//to log action dispatched to redux and to keep track of initial and final state
import logger from "redux-logger";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
//allow our browser to cached our store depend upon certain configuration

import rootReducer from "./root-reducer";

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };
