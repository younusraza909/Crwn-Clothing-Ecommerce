import { createStore, applyMiddleware } from "redux";
//to log action dispatched to redux and to keep track of initial and final state
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
