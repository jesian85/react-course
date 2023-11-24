import { Menu } from '../menu/component';
import { Reviews } from '../reviews/component';

export function Restaurant({ restaurant }) {
   if (!restaurant) {
      return;
   }
   return (
      <>
         <h3>{restaurant.name}</h3>
         <Menu dishes={restaurant.menu} />
         <Reviews reviews={restaurant.reviews} /> 
      </>
   );
}