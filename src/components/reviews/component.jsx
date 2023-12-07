import { Review } from '../review/component';
import classNames from 'classnames';
import styles from './styles.module.css';

export const Reviews = ({ reviewIds, className }) => {
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