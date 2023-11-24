import { useState } from "react";

const COUNTER_MIN = 0;
const COUNTER_MAX = 5;

export const Counter = () => {
    const [counter, setCounter] = useState(COUNTER_MIN);
    const increase = () => { if (counter < COUNTER_MAX) setCounter(c => c + 1); };
    const decrease = () => { if (counter > COUNTER_MIN) setCounter(c => c - 1); };
    return (
        <>
            <button onClick={decrease}>-</button>
            {counter}
            <button onClick={increase}>+</button>
        </>
    );
};