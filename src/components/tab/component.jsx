import classNames from 'classnames';
import styles from './styles.module.scss';
// import { useSelector } from 'react-redux';
// import { selectRestaurantById } from '../../store/features/entities/restaurant/selectors';

export const Tab = ({ restaurant, onTabClick, className }) => {
    // const restaurant = useSelector((state) => selectRestaurantById(state, id));
    // if (!restaurant) {
    //     return;
    // }
    return <button className={classNames(styles.tab, styles.pulse, className)} onClick={onTabClick}>{ restaurant.name }</button>;
};