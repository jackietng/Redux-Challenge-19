import { configureStore } from '@reduxjs/toolkit';
import { userReducer, cartReducer, productsReducer } from './reducers';

const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
        products: productsReducer,
    },
});

export default store;
