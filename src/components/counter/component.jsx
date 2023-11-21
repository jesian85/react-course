import { useState } from "react";

const COUNTER_MIN = 0;
const COUNTER_MAX = 5;

export const Counter = () => {
    const [counter, setCounter] = useState(COUNTER_MIN);
    const increase = () => setCounter(c => c < COUNTER_MAX ? c + 1 : COUNTER_MAX);
    const decrease = () => setCounter(c => c > COUNTER_MIN ? c - 1 : COUNTER_MIN);
    return (
        <>
            <button onClick={decrease}>-</button>{counter}<button onClick={increase}>+</button>
        </>
    );
};