import { Counter } from '../counter/component';
import { useCallback, useState } from 'react';

export const Dish = ({ dish }) => {
    const [counter, setCounter] = useState(0);
    const decrease = useCallback(() => setCounter(c => c - 1), []);
    const increase = useCallback(() => setCounter(c => c + 1), []);
    if (!dish) {
        return;
    }
    // console.log(counter);
    return (
        <div>
            <span>{dish.name}</span>
            <Counter value={counter} decrease={decrease} increase={increase} min={0} max={5} />
        </div>
    );
};