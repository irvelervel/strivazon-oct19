export default function(state = {}, action) {
  switch (action.type) {
    case "ADD_ITEM_TO_CART": {
      return {
        ...state,
        cart: {
          ...state.cart,
          products: state.cart.products.concat(action.payload)
        }
      };
    }
    case "REMOVE_ITEM_TO_CART": {
      return {
        // ...state,
        // cart: {
        //     ...state.cart,
        //     products: state.cart.products.concat(action.payload)
        // }
      };
    }
    default:
      return state;
  }
}

// actionExample = {
//     type: "REMOVE_ITEM_TO_CART",
//     payload: 1
// }
