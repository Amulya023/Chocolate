import { createSlice } from '@reduxjs/toolkit';

const ordersSlice = createSlice({
  name: 'orders',
  initialState: [],
  reducers: {
    addToOrders: (state, action) => {
      const existingOrder = state.find(order => order.id === action.payload.id);
      if (existingOrder) {
        existingOrder.quantity += action.payload.quantity; ; 
      } else {
        state.push({ ...action.payload, quantity: action.payload.quantity }); 
      }
    },
    removeFromOrders: (state, action) => {
      return state.filter(order => order.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const order = state.find(order => order.id === action.payload.id);
      if (order) {
        order.quantity += action.payload.delta;
        if (order.quantity <= 0) {
          return state.filter(o => o.id !== action.payload.id);
        }
      }
    }
  }
});

export const { addToOrders, removeFromOrders, updateQuantity } = ordersSlice.actions;
export default ordersSlice.reducer;
