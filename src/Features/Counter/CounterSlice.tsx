import { createSlice } from '@reduxjs/toolkit';
import { Cart } from '../../Interface/CartInterface';
// import { Product } from '../../Interface/DataInterface';
export interface CartState {
  value: Cart[];
  quantity?: number;
  total?: number;
}

const initialState: CartState = {
  value: [],
  quantity: 0,
  total: 0,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex === -1) {
        const tempItem: Cart = { ...action.payload, quantity: 1 };
        state.value.push(tempItem);
        // state.total = state.total * action.payload.price;
      } else {
        state.value[itemIndex].quantity += 1;
      }
    },

    removeFromCart: (state, action) => {
      let products: Cart[];
      if (state.value.length === 0) {
        return;
      } else {
        products = state.value.filter((item) => {
          return item.id !== action.payload;
        });
      }
      return {
        value: products,
      };
    },

    increment: (state, action) => {
      const itemIndex = state.value.findIndex(
        (item) => item.id === action.payload
      );
      state.value[itemIndex].quantity += 1;
    },
    decrement: (state, action) => {
      const itemIndex = state.value.findIndex(
        (item) => item.id === action.payload
      );
      state.value[itemIndex].quantity = 1;
    },
  },
});

export const { addToCart, removeFromCart, increment, decrement } =
  productSlice.actions;
export default productSlice.reducer;
