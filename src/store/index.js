import { createStore } from "redux";
import myReducer from "../reducers";

const initialState = {
  cart: {
    products: []
  },
  user: {
    username: null
  }
};

export default function configureStore() {
  return createStore(
    myReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
