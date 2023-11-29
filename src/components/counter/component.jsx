import styles from './styles.module.scss';
import classNames from 'classnames';

export const Counter = ({ value, increase, decrease, className, type='primary', size='small', min = 0, max = 5 }) => {
    const disableMinusButton = value <= min;
    const disablePlusButton = value >= max;
    return (
        <div className={classNames(className, styles.counter)}>
            <div>
                <button
                    className={classNames(
                        styles.counterButton,
                        className,
                        styles[size],
                        styles[type],
                        {
                            [styles.active]: !disableMinusButton,
                            [styles.disabled]: disableMinusButton
                        }
                    )} onClick={decrease} disabled={disableMinusButton}>-</button>
                <div className={classNames(styles.counterValue, styles['val-' + size])}>{value}</div>
                <button
                    className={classNames(
                        styles.counterButton,
                        className,
                        styles[size],
                        styles[type],
                        {
                            [styles.active]: !disablePlusButton,
                            [styles.disabled]: disablePlusButton
                        }
                    )} onClick={increase} disabled={disablePlusButton}>+</button>
            </div>
        </div>
    );
};