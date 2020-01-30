import { createStore, combineReducers } from "redux";
import cartReducer from "../reducers/cart";
import userReducer from "../reducers/user";

const initialState = {
  cart: {
    products: []
  },
  user: {
    username: null
  }
};

const combinedReducer = combineReducers({
  cart: cartReducer,
  user: userReducer
});

export default function configureStore() {
  return createStore(
    combinedReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
