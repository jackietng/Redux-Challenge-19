import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../actions/cartActions';
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from '../actions/cartActions';


const initialState = {
  cart: [],
  cartOpen: false,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };
    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload),
      };
    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item._id === action.payload.id
            ? { ...item, purchaseQuantity: action.payload.quantity }
            : item
        ),
      };
    default:
      return state;
  }
};
