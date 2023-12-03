import { Footer } from "../footer/component";
import { Header } from "../header/component";
import classNames from "classnames";
import styles from './styles.module.css';

export const Layout = ({ children, className }) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Header className={styles.header} />
            <main>{children}</main>
            <Footer className={styles.footer} />
        </div>
    );
};