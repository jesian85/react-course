import { useState } from "react";
import styles from './styles.module.css';
import classNames from "classnames";
import { ReviewForm } from "../review-form/component";
import { useGetUsersQuery } from "../../store/services/api";

export const Review = ({ review, className }) => {
    const [editMode, setEditMode] = useState(false);
    const { data: user } = useGetUsersQuery(undefined, {
        selectFromResult: (result) => {
            return { ...result, data: result?.data?.find((user) => user.id === review.userId) };
        }
    });
    if (!review) {
        return null;
    }
    return (
        <>
            <div className={classNames(styles.root, className)}>
                <div className={styles.text}>{review.text}</div>
                <button className={styles.editButton} onClick={() => setEditMode((editMode) => !editMode)}>Изменить</button>
            </div>
            {editMode && <ReviewForm review={{ ...review, name: user?.name }} editMode={editMode} className={styles.reviewForm} />}
        </>
    );  
};