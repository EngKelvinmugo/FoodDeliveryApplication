import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

export const BasketSlice = createSlice({
  name: "basket",
  initialState: {
    items: [],
  },
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items , action.payload]
    },
    removeFromBasket: (state, action) => {
      console.log("Removing item with id:", action.payload);
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
      console.log("Updated items:", state.items);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } =
  BasketSlice.actions;

export const selectBasketItems = (state) => state.basket.items;

// export const selectBasketItemsWithId = (state , id ) => state.basket.items.filter((item) => item.id === id);

export const selectBasketItemsWithId = createSelector(
  [(state) => state.basket.items, (_, id) => id],
  (items, id) => items.filter((item) => item.id === id)
);

export const totalPrice = (state) =>{
    return state.basket.items.reduce((total , item) => total += item.price ,0)
}

export default BasketSlice.reducer;
