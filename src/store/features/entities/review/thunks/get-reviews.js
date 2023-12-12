import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantReviewIds } from "../../restaurant/selectors";
import { selectReviewIds } from "../selectors";

export const getReviews = createAsyncThunk(
    "review/getReviews",
    async (restaurantId, { rejectWithValue }) => {
        console.log("fetch reviews");
        const response = await fetch(
            `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
        );
        const result = await response.json();
        if (!result?.length) {
            return rejectWithValue("Empty reviews");
        }
        return result;
    },
    {
        condition: (restaurantId, { getState }) => {
            console.log("condition reviews");
            const state = getState();
            const reviewIds = selectReviewIds(state);
            const restaurantReviewIds = selectRestaurantReviewIds(state, restaurantId);
            return !restaurantReviewIds.every((reviewId) => reviewIds.includes(reviewId));
        },
    }
);
