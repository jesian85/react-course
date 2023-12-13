import { RestaurantTabs } from '../../components/restaurant-tabs/component';
import { Restaurant } from '../../components/restaurant/component';
import { useState } from 'react';
import styles from './styles.module.css';
import { Layout } from '../../components/layout/component';
import { ThemeProvider } from '../../contexts/theme/component';
import { useGetRestaurantsQuery, useGetUsersQuery } from '../../store/services/api';

export const RestaurantsPage = () => {
    const [restaurantIndex, setRestaurantIndex] = useState(undefined);
    const { data: restaurants, isFetching } = useGetRestaurantsQuery();
    const { isFetching: isUsersFetching }  = useGetUsersQuery();
    if (isFetching && isUsersFetching) {
        return <div className={styles.loading}>Загрузка...</div>;
    }
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