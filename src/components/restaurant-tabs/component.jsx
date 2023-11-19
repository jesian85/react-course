import { RestaurantTab } from '../restaurant-tab/component';

export const RestaurantTabs = ({restaurants}) => {
    return (
        <div>
            { restaurants.map((restaurant) => (
                <RestaurantTab key={restaurant.id} name={restaurant.name} />
            ))}
        </div>
    );
}