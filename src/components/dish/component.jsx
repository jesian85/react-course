import { Counter } from '../counter/component';
import { useState } from 'react';
import styles from './styles.module.css';

export const Dish = ({ dish }) => {
    const [counter, setCounter] = useState(0);
    if (!dish) {
        return;
    }
    return (
        <div className={styles.dish}>
            <div className={styles.dishName}>{dish.name}</div>
            <Counter value={counter}
                decrease={() => setCounter(c => c - 1)}
                increase={() => setCounter(c => c + 1)}
                className={styles.counter} type='secondary' size='medium' min={0} max={5} />
        </div>
    );
};