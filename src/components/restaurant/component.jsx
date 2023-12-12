import { Menu } from '../menu/component';
import { Reviews } from '../reviews/component';
import { ReviewForm } from '../../components/review-form/component';
import classNames from 'classnames';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../store/features/entities/restaurant/selectors';

export function Restaurant({ id, className }) {
   const restaurant = useSelector((state) => selectRestaurantById(state, id));
   if (!restaurant) {
      return;
   }
   return (
      <div className={classNames(styles.restaurant, className)}>
         <h3 className={styles.restaurantName}>{restaurant.name}</h3>
         <hr/>
         <Menu restaurantId={restaurant.id} dishIds={restaurant.menu} className={styles.menu} />
         <hr/>
         <Reviews restaurantId={restaurant.id} reviewIds={restaurant.reviews} className={styles.reviews} />
         <hr/>
         <ReviewForm restaurantId={restaurant.id} className={styles.reviewForm} />
      </div>
   );
}