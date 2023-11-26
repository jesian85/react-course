import { RestaurantTabs } from '../../components/restaurant-tabs/component';
import { Restaurant } from '../../components/restaurant/component';
import { useState } from 'react';

export const RestaurantsPage = ({ restaurants }) => {
    const [restaurantIndex, setRestaurantIndex] = useState(-1);
    if (!restaurants.length) {
        return null;
    }
    const restaurant = restaurants[restaurantIndex];
    return ( 
        <div>
            <RestaurantTabs restaurants={restaurants} onTabClick={setRestaurantIndex} />
            {restaurant && <Restaurant restaurant={restaurant} />}
        </div>
    );
};