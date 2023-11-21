import { Dish } from '../dish/component';

export const Menu = ({ dishes }) => {
    return (
        <>
            <h3>Меню:</h3>
            <ul>
                { dishes.map((dish) => (
                    <li key={dish.id}>
                        <Dish dish={dish}/>
                    </li>
                )) }
            </ul>
        </>
    );
};