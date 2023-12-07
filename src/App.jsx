import { Provider } from 'react-redux';
import { RestaurantsPage } from './pages/restaurants-page/component';
import store from './store';

export const App = () => {
    return (
        <Provider store={store}>
            <RestaurantsPage />
        </Provider>
    );
};