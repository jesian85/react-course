import { useGetReviewsQuery } from '../../store/services/api';
import { Reviews } from '../reviews/component';
import styles from './styles.module.css';

export const ReviewsContainer = ({ restaurantId, ...props }) => {
    const { data: reviews, isFetching } = useGetReviewsQuery(restaurantId);
    if (isFetching) {
        return <div className={styles.loading}>Загрузка...</div>;
    }
    return <Reviews reviews={reviews} {...props} />;
};