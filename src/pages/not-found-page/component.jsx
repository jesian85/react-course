import { useNavigate } from "react-router-dom";
import styles from './styles.module.css';

export const NotFoundPage = () => {
    const navigate = useNavigate();
    return <div>
        <h3 className={styles.text}>Страница не найдена</h3>
        <button className={styles.button} onClick={() => navigate("restaurants")}>К списку ресторанов</button>
    </div>;
};