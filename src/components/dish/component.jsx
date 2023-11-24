import { Counter } from '../counter/component';

export const Dish = ({ dish }) => {
    if (!dish) {
        return;
    }
    return (
        <div>
            {dish.name} <Counter />
        </div>
    );
};