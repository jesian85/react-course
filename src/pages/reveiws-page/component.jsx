import { useParams } from "react-router-dom";
import { ReviewsContainer } from "../../components/reviews/container";
import styles from './styles.module.css';

export function ReviewsPage() {
    const { restaurantId } = useParams();
    return <ReviewsContainer restaurantId={restaurantId} className={styles.reviews} />;
}