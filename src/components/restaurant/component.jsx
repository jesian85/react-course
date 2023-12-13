import { Menu } from '../menu/component';
import { Reviews } from '../reviews/component';
import { ReviewForm } from '../../components/review-form/component';
import classNames from 'classnames';
import styles from './styles.module.css';

export function Restaurant({ restaurant, className }) {
   if (!restaurant) {
      return null;
   }
   return (
      <div className={classNames(styles.restaurant, className)}>
         <h3 className={styles.restaurantName}>{restaurant.name}</h3>
         <hr/>
         <Menu restaurantId={restaurant.id} className={styles.menu} />
         <hr/>
         <Reviews restaurantId={restaurant.id} className={styles.reviews} />
         <hr/>
         <ReviewForm restaurantId={restaurant.id} className={styles.reviewForm} />
      </div>
   );
}