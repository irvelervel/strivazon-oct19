import { createStore } from "redux";
import myReducer from "../reducers";

const initialState = {
  cart: {
    products: []
  }
};

export default function configureStore() {
  return createStore(myReducer, initialState);
}
