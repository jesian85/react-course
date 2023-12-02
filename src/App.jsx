import { RestaurantsPage } from './pages/restaurants-page/component';
import styles from './styles/app.module.css';

export const App = ({ restaurants }) => {
    return <RestaurantsPage restaurants={restaurants} className={styles.restaurantPage} />;
}