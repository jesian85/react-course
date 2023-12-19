import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishes } from "./thunks/get-dishes";
import { REQUEST_STATUSES } from "../../../../constants/request-statuses";

export const dishAdapter = createEntityAdapter();

export const dishSlice = createSlice({
    name: "dish",
    initialState: dishAdapter.getInitialState({ status: REQUEST_STATUSES.idle }),
    extraReducers: (builder) => {
        builder
            .addCase(getDishes.pending, (state) => {
                state.status = REQUEST_STATUSES.pending;
            })
            .addCase(getDishes.fulfilled, (state, { payload }) => {
                dishAdapter.setMany(state, payload);
                state.status = REQUEST_STATUSES.fulfilled;
            })
            .addCase(getDishes.rejected, (state) => {
                state.status = REQUEST_STATUSES.rejected;
            });
    },
});
