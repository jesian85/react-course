import { Review } from '../review/component';
import classNames from 'classnames';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { selectReviewIdsFilteredByRestaurantId } from '../../store/features/entities/review/selectors';

export const Reviews = ({ restaurantId, className }) => {
    const reviewIds = useSelector((state) => selectReviewIdsFilteredByRestaurantId(state, restaurantId));
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