import classNames from 'classnames';
import styles from './styles.module.css';
import { useTheme } from '../../contexts/theme/hooks';
import { useNavigate } from 'react-router-dom';

export const Header = ({ className }) => {
    const { changeTheme } = useTheme();
    const navigate = useNavigate();
    return <div className={classNames(styles.root, className)}>
        <button className={styles.button} onClick={() => navigate("/restaurants")}>Рестораны</button>
        <button className={styles.button}>Заказ</button>
        <button
            className={styles.button}
            onClick={changeTheme}>Смена темы</button>
    </div>;
};