import classNames from 'classnames';
import styles from './styles.module.css';
import { useTheme } from '../theme/hooks';

export const Header = ({ className }) => {
    const { theme, changeTheme } = useTheme();
    return <div className={classNames(styles.root, className)}>
        <button className={styles.button}>Заказ</button>
        <button
            className={styles.button}
            onClick={() => changeTheme({ themeName: theme.themeName === 'light' ? 'dark' : 'light' })}>Смена темы</button>
    </div>;
};