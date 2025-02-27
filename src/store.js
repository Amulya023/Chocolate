import { configureStore } from '@reduxjs/toolkit';
import chocolateReducer from './chocolateSlice';
import ordersReducer from './ordersSlice';

const store = configureStore({
  reducer: {
    chocolates: chocolateReducer,
    orders: ordersReducer,
  },
});

export default store;
