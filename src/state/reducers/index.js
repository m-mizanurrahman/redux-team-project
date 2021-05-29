import { combineReducers } from "redux";
import cartReducer from "./CartReducer";

const reducers = combineReducers({
  cart: cartReducer,
});

export default reducers;
