export const selectRestaurantModule = (state) => state.restaurant;
export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;
export const selectRestaurantById = (state, id) => selectRestaurantModule(state).entities[id];
export const selectRestaurantDishIds = (state, id) => {
    const restaurant = selectRestaurantById(state, id);
    return restaurant?.menu;
};
export const selectRestaurantReviewIds = (state, id) => {
    const restaurant = selectRestaurantById(state, id);
    return restaurant?.reviews;
};
