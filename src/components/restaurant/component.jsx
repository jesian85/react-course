import { Menu } from '../menu/component';
import { Reviews } from '../reviews/component';
import { ReviewForm } from '../../components/review-form/component';
import classNames from 'classnames';
import styles from './styles.module.css';

export function Restaurant({ restaurant, className }) {
   if (!restaurant) {
      return;
   }
   return (
      <div className={classNames(styles.restaurant, className)}>
         <h3 className={styles.restaurantName}>{restaurant.name}</h3>
         <hr/>
         <Menu dishes={restaurant.menu} className={styles.menu} />
         <hr/>
         <Reviews reviews={restaurant.reviews} className={styles.reviews} />
         <hr/>
         <ReviewForm restaurantId={restaurant.id} />
      </div>
   );
}