import classNames from 'classnames';
import styles from './styles.module.css';

export const Footer = ({ className }) =>{
    return <div className={classNames(styles.root, className)}>
        <button className={styles.button}>Контакты</button>
    </div>;
};