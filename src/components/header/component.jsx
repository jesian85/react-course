import classNames from 'classnames';
import styles from './styles.module.css';
import { useTheme } from '../../contexts/theme/hooks';

export const Header = ({ className }) => {
    const { changeTheme } = useTheme();
    return <div className={classNames(styles.root, className)}>
        <button className={styles.button}>Заказ</button>
        <button
            className={styles.button}
            onClick={changeTheme}>Смена темы</button>
    </div>;
};