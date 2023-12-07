import { Tab } from '../tab/component';
import classNames from 'classnames';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { selectRestaurantIds } from '../../store/features/entities/restaurant/selectors';

export const RestaurantTabs = ({ onTabClick, className }) => {
    const restaurantIds = useSelector(selectRestaurantIds);
    if (!restaurantIds.length) {
      return null;
    }
    return (
        <div className={classNames(styles.restaurantTabs, className)}>
            { restaurantIds.map((id) => (
                <Tab key={id} id={id} onTabClick={() => onTabClick(id)} className={styles.tab} />
            ))}
        </div>
    );
};