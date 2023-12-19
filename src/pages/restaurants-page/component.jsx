import { Outlet } from 'react-router-dom';
import { RestaurantTabs } from '../../components/restaurant-tabs/component';
import styles from './styles.module.css';

export const RestaurantsPage = ({ restaurants }) => {
    return <>
        <RestaurantTabs restaurants={restaurants} className={styles.restaurantTabs} />
        <Outlet />
    </>;
};