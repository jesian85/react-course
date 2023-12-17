import { Provider } from 'react-redux';
import store from './store';
import { RestaurantsPageContainer } from './pages/restaurants-page/container';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/component';
import { ThemeProvider } from './contexts/theme/component';
import styles from './styles/app.module.css';
import { NotFoundPage } from './pages/not-found-page/component';
import { MainPage } from './pages/main-page/component';
import { RestaurantPage } from './pages/restaurant-page/component';
import { MenuPage } from './pages/menu-page/component';
import { ReviewsPage } from './pages/reveiws-page/component';

export const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider>
                    <Layout className={styles.layout}>
                        <Routes>
                            <Route index element={<MainPage />} />
                            <Route path="restaurants" element={<RestaurantsPageContainer />}>
                                <Route path=":restaurantId" element={<RestaurantPage />}>
                                    <Route index element={<MenuPage />} />
                                    <Route path="menu" element={<MenuPage />} />
                                    <Route path="reviews" element={<ReviewsPage />} />
                                </Route>
                            </Route>
                            <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                    </Layout>
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    );
};