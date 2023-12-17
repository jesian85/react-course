import { Dish } from '../dish/component';
import classNames from 'classnames';
import styles from './styles.module.scss';

export const Menu = ({ dishes, className }) => {
    return (
        <div className={classNames(styles.menu, className)}>
            <div className={styles.container}>
                <h3 className={styles.menuHeader}>Меню:</h3>
                <ul className={styles.dishes}>
                    { dishes.map((dish) => (
                        <li key={dish.id}>
                            <Dish dish={dish} />
                        </li>
                    )) }
                </ul>
            </div>
        </div>
    );
};