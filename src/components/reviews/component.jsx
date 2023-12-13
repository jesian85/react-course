import { Review } from '../review/component';
import classNames from 'classnames';
import styles from './styles.module.css';
import { useGetReviewsQuery } from '../../store/services/api';

export const Reviews = ({ restaurantId, className }) => {
    const { data, isFetching } = useGetReviewsQuery(restaurantId);
    if (isFetching) {
        return <div className={styles.loading}>Загрузка...</div>;
    }
    return (
        <div className={classNames(styles.reviews, className)}>
            <div className={styles.container}>
                <h3 className={styles.reviewsHeader}>Отзывы:</h3>
                <ul className={styles.list}>
                    { data.map((review) => (
                        <li key={review.id}>
                            <Review review={review} className={styles.review} />
                        </li>
                    )) }
                </ul>
            </div>
        </div>
    );
};