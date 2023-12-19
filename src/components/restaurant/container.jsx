import { useGetRestaurantQuery } from '../../store/services/api';
import { Restaurant } from './component';
import styles from './styles.module.css';

export const RestaurantContainer = ({ restaurantId, ...props }) => {
    const { data: restaurant, isFetching } = useGetRestaurantQuery(restaurantId);
    if (isFetching) {
        return <div className={styles.loading}>Загрузка...</div>;
    }
    return <Restaurant restaurant={restaurant} {...props} />;
};