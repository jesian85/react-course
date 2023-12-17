import { RestaurantTabs } from '../../components/restaurant-tabs/component';
import { Restaurant } from '../../components/restaurant/component';
import { useState } from 'react';
import styles from './styles.module.css';
import { Layout } from '../../components/layout/component';
import { ThemeProvider } from '../../contexts/theme/component';

export const RestaurantsPage = ({ restaurants }) => {
    const [restaurantIndex, setRestaurantIndex] = useState(undefined);
    const restaurant = restaurants[restaurantIndex];
    return (
        <ThemeProvider>
            <Layout className={styles.layout}>
                <RestaurantTabs restaurants={restaurants} onTabClick={setRestaurantIndex} className={styles.restaurantTabs} />
                {restaurant && <Restaurant restaurant={restaurant} className={styles.restaurant} />}
            </Layout>
        </ThemeProvider>
    );
};