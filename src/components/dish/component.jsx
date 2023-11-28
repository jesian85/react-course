import { Counter } from '../counter/component';
import { useState } from 'react';

export const Dish = ({ dish }) => {
    const [counter, setCounter] = useState(0);
    if (!dish) {
        return;
    }
    return (
        <div>
            <span>{dish.name}</span>
            <Counter value={counter}
                decrease={() => setCounter(c => c - 1)}
                increase={() => setCounter(c => c + 1)} min={0} max={5} />
        </div>
    );
};