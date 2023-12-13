import { Dish } from '../dish/component';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { useGetDishesQuery } from '../../store/services/api';

export const Menu = ({ restaurantId, className }) => {
    const { data, isFetching } = useGetDishesQuery(restaurantId);
    if (isFetching) {
        return <div className={styles.loading}>Загрузка...</div>;
    }
    return (
        <div className={classNames(styles.menu, className)}>
            <div className={styles.container}>
                <h3 className={styles.menuHeader}>Меню:</h3>
                <ul className={styles.dishes}>
                    { data.map((dish) => (
                        <li className={styles.dish} key={dish.id}>
                            <Dish dish={dish} />
                        </li>
                    )) }
                </ul>
            </div>
        </div>
    );
};