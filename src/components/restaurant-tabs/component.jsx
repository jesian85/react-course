import { Tab } from '../tab/component';
import classNames from 'classnames';
import styles from './styles.module.css';

export const RestaurantTabs = ({restaurants, onTabClick, className}) => {
    return (
        <div className={classNames(styles.restaurantTabs, className)}>
            { restaurants.map(({ id, name}, index) => (
                <Tab key={id} onTabClick={() => onTabClick(index)} className={styles.tab}>{name}</Tab>
            ))}
        </div>
    );
};