import { useGetRestaurantsQuery, useGetUsersQuery } from "../../store/services/api";
import { RestaurantsPage } from "./component";
import styles from './styles.module.css';

export const RestaurantsPageContainer = () => {
    const { data: restaurants, isFetching } = useGetRestaurantsQuery();
    const { isFetching: isUsersFetching }  = useGetUsersQuery();
    if (isFetching && isUsersFetching) {
        return <div className={styles.loading}>Загрузка...</div>;
    }
    return <RestaurantsPage restaurants={restaurants} />
};