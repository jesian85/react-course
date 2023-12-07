import { Dish } from '../dish/component';
import classNames from 'classnames';
import styles from './styles.module.scss';

export const Menu = ({ dishIds, className }) => {
    return (
        <div className={classNames(styles.menu, className)}>
            <div className={styles.container}>
                <h3 className={styles.menuHeader}>Меню:</h3>
                <ul className={styles.dishes}>
                    { dishIds.map((id) => (
                        <li className={styles.dish} key={id}>
                            <Dish id={id} />
                        </li>
                    )) }
                </ul>
            </div>
        </div>
    );
};