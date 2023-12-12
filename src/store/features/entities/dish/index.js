import { createSlice } from "@reduxjs/toolkit";
import { getDishes } from "./thunks/get-dishes";
import { REQUEST_STATUSES } from "../../../../constants/request-statuses";

export const dishSlice = createSlice({
    name: "dish",
    initialState: {
        entities: {},
        ids: [],
        status: REQUEST_STATUSES.idle,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getDishes.pending, (state) => {
                state.status = REQUEST_STATUSES.pending;
            })
            .addCase(getDishes.fulfilled, (state, { payload }) => {
                state.entities = payload.reduce(
                    (acc, dish) => ({ ...acc, [dish.id]: dish }),
                    state.entities
                );
                var ids = payload.map(({ id }) => id);
                state.ids = Array.from(new Set(state.ids.concat(ids)));
                state.status = REQUEST_STATUSES.fulfilled;
            })
            .addCase(getDishes.rejected, (state) => {
                state.status = REQUEST_STATUSES.rejected;
            });
    },
});
