import { Tab } from '../tab/component';
import classNames from 'classnames';
import styles from './styles.module.css';

export const RestaurantTabs = ({ restaurants, onTabClick, className }) => {   
    return (
        <div className={classNames(styles.restaurantTabs, className)}>
            { restaurants.map((restaurant, index) => (
                <Tab key={restaurant.id} restaurant={restaurant} onTabClick={() => onTabClick(index)} className={styles.tab} />
            ))}
        </div>
    );
};