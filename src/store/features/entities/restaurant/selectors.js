export const selectRestaurantModule = (state) => state.restaurant;
export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;
export const selectRestaurantEntities = (state) => selectRestaurantModule(state).entities;
export const selectRestaurantById = (state, id) => selectRestaurantModule(state).entities[id];
