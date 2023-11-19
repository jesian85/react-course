import { RestaurantTabs } from '../../components/restaurant-tabs/component'
import { Restaurants } from '../../components/restaurants/component';

export const RestaurantsPage = ({ restaurants }) => {
    return ( 
        <div>
            <RestaurantTabs restaurants={restaurants} />
            <Restaurants restaurants={restaurants} />
        </div>
    );
}