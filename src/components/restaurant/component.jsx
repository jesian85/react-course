import classNames from 'classnames';
import styles from './styles.module.css';
import { ReviewFormContainer } from '../review-form/container';
import { NavLink, Outlet } from 'react-router-dom';

export function Restaurant({ restaurant, className }) {
   if (!restaurant) {
      return null;
   }
   return (
      <div className={classNames(styles.restaurant, className)}>
         <h3 className={styles.restaurantName}>{restaurant.name}</h3>
         <hr/>
         <div className={styles.menu}>
            <NavLink to="menu" className={({ isActive }) =>
               classNames(styles.link, {
                  [styles.active]: isActive
               })}>Меню</NavLink>
            <NavLink to="reviews" className={({ isActive }) =>
               classNames(styles.link, {
                  [styles.active]: isActive
               })}>Отзывы</NavLink>
         </div>
         <Outlet />
         <hr/>
         <ReviewFormContainer restaurantId={restaurant.id} className={styles.reviewForm} />
      </div>
   );
}