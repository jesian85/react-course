export const Counter = ({ value, increase, decrease, min = 0, max = 5 }) => {
    return (
        <div>
            <button onClick={decrease} disabled={value <= min}>-</button>
            {value}
            <button onClick={increase} disabled={value >= max}>+</button>
        </div>
    );
};