import classNames from 'classnames';
import styles from './styles.module.scss';

export const Tab = ({ children, onTabClick, className }) => {
    return <button className={classNames(styles.tab, styles.pulse, className)} onClick={onTabClick}>{ children }</button>;
};