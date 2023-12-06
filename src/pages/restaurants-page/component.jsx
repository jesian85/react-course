import { RestaurantTabs } from '../../components/restaurant-tabs/component';
import { Restaurant } from '../../components/restaurant/component';
import { useState } from 'react';
import styles from './styles.module.css';
import { Layout } from '../../components/layout/component';
import { ThemeProvider } from '../../contexts/theme/component';

export const RestaurantsPage = () => {
    const [restaurantId, setRestaurantId] = useState(undefined);
    return (
        <ThemeProvider>
            <Layout className={styles.layout}>
                <RestaurantTabs onTabClick={setRestaurantId} className={styles.restaurantTabs} />
                {restaurantId && <Restaurant id={restaurantId} className={styles.restaurant} />}
            </Layout>
        </ThemeProvider>
    );
};