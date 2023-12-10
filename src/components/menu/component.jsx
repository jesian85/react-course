import { Dish } from '../dish/component';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDishes } from '../../store/features/entities/dish/thunks/get-dishes';

export const Menu = ({ restaurantId, dishIds, className }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDishes(restaurantId));
    }, [dispatch, restaurantId]);
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