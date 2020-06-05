import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";
//this will import local storage

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

//redux-Persisit configuration
const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cart"],
  //containig string name of reducer that we wanna store
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
