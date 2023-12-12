import { configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./features/entities/restaurant";
import { dishSlice } from "./features/entities/dish";
import { reviewSlice } from "./features/entities/review";
import { userSlice } from "./features/entities/user";

const store = configureStore({
    reducer: {
        restaurant: restaurantSlice.reducer,
        dish: dishSlice.reducer,
        review: reviewSlice.reducer,
        user: userSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
