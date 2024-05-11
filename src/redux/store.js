import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartItemSlice.js"
import categoryFilter from "./features/categoryFilter.js";
import searchFilter from "./features/searchFilter.js";
export const store = configureStore({
    reducer: {
        cart: cartSlice,
        categoryfilter: categoryFilter,
        searchFilter: searchFilter,
    }
});