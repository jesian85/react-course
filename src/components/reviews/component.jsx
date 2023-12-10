import { Review } from '../review/component';
import classNames from 'classnames';
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getReviews } from '../../store/features/entities/review/thunks/get-reviews';

export const Reviews = ({ restaurantId, reviewIds, className }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getReviews(restaurantId));
    }, [dispatch, restaurantId]);
    return (
        <div className={classNames(styles.reviews, className)}>
            <div className={styles.container}>
                <h3 className={styles.reviewsHeader}>Отзывы:</h3>
                <ul className={styles.list}>
                    { reviewIds.map((id) => (
                        <li key={id}>
                            <Review id={id} className={styles.review} />
                        </li>
                    )) }
                </ul>
            </div>
        </div>
    );
};