import { Tab } from '../tab/component';

export const RestaurantTabs = ({restaurants}) => {
    return (
        <div>
            { restaurants.map((restaurant) => (
                <Tab key={restaurant.id}>{restaurant.name}</Tab>
            ))}
        </div>
    );
};