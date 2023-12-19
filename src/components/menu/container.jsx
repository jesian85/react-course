import { useGetDishesQuery } from "../../store/services/api";
import { Menu } from "./component";
import styles from './styles.module.scss';

export const MenuContainer = ({ restaurantId, ...props }) => {
    const { data: dishes, isFetching } = useGetDishesQuery(restaurantId);
    if (isFetching) {
        return <div className={styles.loading}>Загрузка...</div>;
    }
    return <Menu dishes={dishes} {...props} />;
};