import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUSES } from "../../../../constants/request-statuses";
import { getReviews } from "./thunks/get-reviews";

export const reviewAdapter = createEntityAdapter();

export const reviewSlice = createSlice({
    name: "review",
    initialState: reviewAdapter.getInitialState({ status: REQUEST_STATUSES.idle }),
    extraReducers: (builder) => {
        builder
            .addCase(getReviews.pending, (state) => {
                state.status = REQUEST_STATUSES.pending;
            })
            .addCase(getReviews.fulfilled, (state, { payload }) => {
                reviewAdapter.setMany(state, payload);
                state.status = REQUEST_STATUSES.fulfilled;
            })
            .addCase(getReviews.rejected, (state) => {
                state.status = REQUEST_STATUSES.rejected;
            });
    },
});
