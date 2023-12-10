import { Tab } from '../tab/component';
import classNames from 'classnames';
import styles from './styles.module.css';

export const RestaurantTabs = ({ restaurantIds, onTabClick, className }) => {   
    return (
        <div className={classNames(styles.restaurantTabs, className)}>
            { restaurantIds.map((id) => (
                <Tab key={id} id={id} onTabClick={() => onTabClick(id)} className={styles.tab} />
            ))}
        </div>
    );
};