import { Menu } from '../menu/component';
import { Reviews } from '../reviews/component';
import { ReviewForm } from '../../components/review-form/component';

export function Restaurant({ restaurant }) {
   if (!restaurant) {
      return;
   }
   return (
      <div>
         <h3>{restaurant.name}</h3>
         <Menu dishes={restaurant.menu} />
         <Reviews reviews={restaurant.reviews} />
         <ReviewForm restaurantId={restaurant.id} />
      </div>
   );
}