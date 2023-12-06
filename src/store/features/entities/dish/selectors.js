import { selectRestaurantById } from "../restaurant/selectors";

export const selectDishModule = (state) => state.dish;
export const selectDishIds = (state) => selectDishModule(state).ids;
export const selectDishById = (state, id) => selectDishModule(state).entities[id];
export const selectDishIdsFilteredByRestaurantId = (state, restaurantId) => {
    const dishIds = selectDishIds(state);
    if (!restaurantId) {
        return dishIds;
    }
    const restaurant = selectRestaurantById(state, restaurantId);
    return dishIds.filter((dishId) => restaurant?.menu?.includes(dishId));
    // const set1 = new Set(dishIds);
    // const set2 = new Set(restaurant?.menu);
    // return [...set1].filter((element) => set2.has(element));
};
