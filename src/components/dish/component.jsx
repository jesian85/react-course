export const Dish = ({ dish }) => {
    if (!dish) {
        return;
    }
    return <div>{dish.name}</div>;
};