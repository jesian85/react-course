import { RestaurantTabs } from '../../components/restaurant-tabs/component';
import { Restaurant } from '../../components/restaurant/component';
import { useState } from 'react';

export const RestaurantsPage = ({ restaurants }) => {
    const [selectedRestaurant, setSelectedRestaurant] = useState();
    if (!restaurants.length) {
        return null;
    }
    const restaurant = restaurants.find(({ name }) => name === selectedRestaurant);
    return ( 
        <div>
            <RestaurantTabs restaurants={restaurants} onRestaurantSelect={setSelectedRestaurant} />
            {restaurant !== undefined && <Restaurant restaurant={restaurant} />}
        </div>
    );
};