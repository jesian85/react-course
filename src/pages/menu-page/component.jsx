import { useParams } from "react-router-dom";
import { MenuContainer } from "../../components/menu/container";
import styles from './styles.module.css';

export function MenuPage() {
    const { restaurantId } = useParams();
    return <MenuContainer restaurantId={restaurantId} className={styles.menu}  />;
}