import { RestaurantsPage } from './pages/restaurants-page/component';
import './styles/index.css';

export const App = ({ restaurants }) => {
    return <RestaurantsPage restaurants={restaurants} />;
}