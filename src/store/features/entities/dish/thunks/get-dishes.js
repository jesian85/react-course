import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishIds } from "../selectors";
import { selectRestaurantById } from "../../restaurant/selectors";

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
            if (!dishIds.length) return true;
            const restaurant = selectRestaurantById(state, restaurantId);
            const menu = restaurant.menu;
            return !menu.every((dishId) => dishIds.includes(dishId));
        },
    }
);
