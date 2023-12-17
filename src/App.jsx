import { Provider } from 'react-redux';
import store from './store';
import { RestaurantsPageContainer } from './pages/restaurants-page/container';

export const App = () => {
    return (
        <Provider store={store}>
            <RestaurantsPageContainer />
        </Provider>
    );
};