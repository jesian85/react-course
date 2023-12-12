import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantIds } from "../selectors";

export const getRestaurants = createAsyncThunk(
    "restaurant/getRestaurants",
    async (_, { rejectWithValue }) => {
        console.log("fetch restaurants");
        const response = await fetch("http://localhost:3001/api/restaurants");
        const result = await response.json();
        if (!result?.length) {
            return rejectWithValue("Empty restaurants");
        }
        return result;
    },
    {
        condition: (_, { getState }) => !selectRestaurantIds(getState()).length,
    }
);
