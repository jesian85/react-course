import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../../constants/normalized-mock";

export const dishSlice = createSlice({
    name: "dish",
    initialState: {
        entities: normalizedDishes.reduce(
            (acc, dish) => ({ ...acc, [dish.id]: dish }),
            {}
        ),
        ids: normalizedDishes.map(({ id }) => id),
    },
});
