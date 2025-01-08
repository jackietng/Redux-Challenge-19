import {
    SET_PRODUCTS,
    UPDATE_PRODUCT,
    SET_CURRENT_PRODUCT,
    SET_CATEGORIES,
    FILTER_BY_CATEGORY,
  } from '../actions/productsActions';
  
  const initialState = {
    products: [],
    currentProduct: null,
    categories: [],
    filteredProducts: [],
  };
  
  export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_PRODUCTS:
        return {
          ...state,
          products: action.payload,
        };
      case UPDATE_PRODUCT:
        return {
          ...state,
          products: state.products.map((product) =>
            product._id === action.payload._id ? action.payload : product
          ),
        };
      case SET_CURRENT_PRODUCT:
        return {
          ...state,
          currentProduct: action.payload,
        };
      case SET_CATEGORIES:
        return {
          ...state,
          categories: action.payload,
        };
      case FILTER_BY_CATEGORY:
        return {
          ...state,
          filteredProducts: state.products.filter(
            (product) => product.categoryId === action.payload
          ),
        };
      default:
        return state;
    }
  };
  