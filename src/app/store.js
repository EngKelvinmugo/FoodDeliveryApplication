import { configureStore } from "@reduxjs/toolkit";
import basketReducers from "../../features/BasketSlice"
import restaurantReducer from "../../features/RestaurantSlice"

export default configureStore({
  reducer: {
    basket: basketReducers,
    restaurant: restaurantReducer,
  },
});
