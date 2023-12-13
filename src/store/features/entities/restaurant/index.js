import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./thunks/get-restaurants";
import { REQUEST_STATUSES } from "../../../../constants/request-statuses";

export const restaurantAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
    name: "restaurant",
    initialState: restaurantAdapter.getInitialState({ status: REQUEST_STATUSES.idle }),
    extraReducers: (builder) => {
        builder
            .addCase(getRestaurants.pending, (state) => {
                state.status = REQUEST_STATUSES.pending;
            })
            .addCase(getRestaurants.fulfilled, (state, { payload }) => {
                restaurantAdapter.setAll(state, payload);
                state.status = REQUEST_STATUSES.fulfilled;
            })
            .addCase(getRestaurants.rejected, (state) => {
                state.status = REQUEST_STATUSES.rejected;
            });
    },
});
