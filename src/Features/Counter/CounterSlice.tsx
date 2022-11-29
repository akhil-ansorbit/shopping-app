import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../Interface/DataInterface";
export interface CartState {
  value: Product[];
}

const initialState: CartState = {
  value: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload);
      let products: Product[];

      if (state.value.length === 0) {
        products = [action.payload];
      } else {
        products = [...state.value, action.payload];
      }
      return {
        value: products,
      };
    },
  },
});

export const { addToCart } = productSlice.actions;
export default productSlice.reducer;
