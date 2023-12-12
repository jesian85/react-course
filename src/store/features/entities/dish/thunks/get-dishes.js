import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishIds } from "../selectors";
import { selectRestaurantDishIds } from "../../restaurant/selectors";

export const getDishes = createAsyncThunk(
    "dish/getDishes",
    async (restaurantId, { rejectWithValue }) => {
        console.log("fetch dishes");
        const response = await fetch(
            `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
        );
        const result = await response.json();
        if (!result?.length) {
            return rejectWithValue("Empty dishes");
        }
        return result;
    },
    {
        condition: (restaurantId, { getState }) => {
            console.log("condition dishes");
            const state = getState();
            const dishIds = selectDishIds(state);
            const restaurantDishIds = selectRestaurantDishIds(state, restaurantId);
            return !restaurantDishIds.every((dishId) => dishIds.includes(dishId));
        },
    }
);
