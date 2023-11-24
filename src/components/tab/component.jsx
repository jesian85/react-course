export const Tab = ({ children, onTabClick }) => {
    return <button onClick={onTabClick}>{ children }</button>;
};