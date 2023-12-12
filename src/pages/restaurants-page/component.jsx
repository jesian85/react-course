import { RestaurantTabs } from '../../components/restaurant-tabs/component';
import { Restaurant } from '../../components/restaurant/component';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { Layout } from '../../components/layout/component';
import { ThemeProvider } from '../../contexts/theme/component';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurants } from '../../store/features/entities/restaurant/thunks/get-restaurants';
import { selectRestaurantIds } from '../../store/features/entities/restaurant/selectors';
import { getUsers } from '../../store/features/entities/user/thunks/get-users';

export const RestaurantsPage = () => {
    const [restaurantId, setRestaurantId] = useState(undefined);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRestaurants());
        dispatch(getUsers())
    }, [dispatch]);
    const restaurantIds = useSelector(selectRestaurantIds);   
    if (!restaurantIds?.length) {
      return null;
    }
    return (
        <ThemeProvider>
            <Layout className={styles.layout}>
                <RestaurantTabs restaurantIds={restaurantIds} onTabClick={setRestaurantId} className={styles.restaurantTabs} />
                {restaurantId && <Restaurant id={restaurantId} className={styles.restaurant} />}
            </Layout>
        </ThemeProvider>
    );
};