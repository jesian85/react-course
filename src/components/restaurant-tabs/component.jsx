import classNames from 'classnames';
import styles from './styles.module.css';
import { TabContainer } from '../tab/container';

export const RestaurantTabs = ({ restaurants, className }) => {
    return (
        <div className={classNames(styles.restaurantTabs, className)}>
            {restaurants.map((restaurant) => (
                <TabContainer key={restaurant.id} restaurant={restaurant} className={styles.tab} />
            ))}
        </div>
    );
};