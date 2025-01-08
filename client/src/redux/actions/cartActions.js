export const TOGGLE_CART = 'TOGGLE_CART';
export const ADD_MULTIPLE_TO_CART = 'ADD_MULTIPLE_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_QUANTITY = 'UPDATE_CART_QUANTITY';

export const toggleCart = () => ({
  type: TOGGLE_CART,
});

export const addMultipleToCart = (products) => ({
  type: ADD_MULTIPLE_TO_CART,
  payload: products,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const updateCartQuantity = (id, quantity) => ({
  type: UPDATE_CART_QUANTITY,
  payload: { id, quantity },
});
