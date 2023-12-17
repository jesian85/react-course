import classNames from 'classnames';
import styles from './styles.module.css';
import { ReviewFormContainer } from '../review-form/container';
import { MenuContainer } from '../menu/container';
import { ReviewsContainer } from '../reviews/container';

export function Restaurant({ restaurant, className }) {
   if (!restaurant) {
      return null;
   }
   return (
      <div className={classNames(styles.restaurant, className)}>
         <h3 className={styles.restaurantName}>{restaurant.name}</h3>
         <hr/>
         <MenuContainer restaurantId={restaurant.id} className={styles.menu} />
         <hr/>
         <ReviewsContainer restaurantId={restaurant.id} className={styles.reviews} />
         <hr/>
         <ReviewFormContainer restaurantId={restaurant.id} className={styles.reviewForm} />
      </div>
   );
}