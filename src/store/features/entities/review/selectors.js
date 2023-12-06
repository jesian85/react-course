import { selectRestaurantById } from "../restaurant/selectors";

export const selectReviewModule = (state) => state.review;
export const selectReviewIds = (state) => selectReviewModule(state).ids;
export const selectReviewById = (state, id) => selectReviewModule(state).entities[id];
export const selectReviewIdsFilteredByRestaurantId = (state, restaurantId) => {
    const reviewIds = selectReviewIds(state);
    if (!restaurantId) {
        return reviewIds;
    }
    const restaurant = selectRestaurantById(state, restaurantId);
    return reviewIds.filter((reviewId) => restaurant?.reviews?.includes(reviewId));
};
