import { useState } from "react";
import styles from './styles.module.css';
import classNames from "classnames";
import { ReviewEditFormContainer } from "../review-edit-form/container";

export const Review = ({ review, className }) => {
    const [editMode, setEditMode] = useState(false);
    if (!review) {
        return null;
    }
    return (
        <>
            <div className={classNames(styles.root, className)}>
                <div className={styles.text}>{review.text}</div>
                <button className={styles.editButton} onClick={() => setEditMode((editMode) => !editMode)}>{!editMode ? 'Изменить' : 'Скрыть'}</button>
            </div>
            {editMode && <ReviewEditFormContainer review={review} className={styles.reviewForm} />}
        </>
    );  
};