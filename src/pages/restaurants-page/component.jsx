import { RestaurantTabs } from '../../components/restaurant-tabs/component'
// import { Restaurants } from '../../components/restaurants/component';
import { Restaurant } from '../../components/restaurant/component'
import { useState } from 'react';

export const RestaurantsPage = ({ restaurants }) => {
    const [selectedRestaurant, setSelectedRestaurant] = useState();
    if (!restaurants.length) {
        return null;
    }
    // console.log(selectedRestaurant);
    // const filteredRestaurants = restaurants.filter(({ name }) => name === selectedRestaurant);
    const restaurant = restaurants.find(({ name }) => name === selectedRestaurant);
    // console.log(restaurant?.name);
    return ( 
        <div>
            <RestaurantTabs restaurants={restaurants} onRestaurantSelect={setSelectedRestaurant} />
            {/* {filteredRestaurants.length > 0} */}
            {/* <Restaurants restaurants={filteredRestaurants} /> */}
            {restaurant !== undefined}
            <Restaurant restaurant={restaurant} />
        </div>
    );
};