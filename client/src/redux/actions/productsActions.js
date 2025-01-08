export const SET_PRODUCTS = 'SET_PRODUCTS';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const SET_CURRENT_PRODUCT = 'SET_CURRENT_PRODUCT';
export const SET_CATEGORIES = 'SET_CATEGORIES';
export const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY';

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const updateProduct = (updatedProduct) => ({
  type: UPDATE_PRODUCT,
  payload: updatedProduct,
});

export const setCurrentProduct = (product) => ({
  type: SET_CURRENT_PRODUCT,
  payload: product,
});

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});

export const filterByCategory = (categoryId) => ({
  type: FILTER_BY_CATEGORY,
  payload: categoryId,
});
