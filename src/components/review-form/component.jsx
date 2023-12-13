import { Counter } from '../counter/component';
import { useEffect, useReducer } from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';
import { useCreateReviewMutation, useGetUsersQuery, useUpdateReviewMutation } from '../../store/services/api';

const SET_NAME = 'setName';
const SET_TEXT = 'setText';
const DECREASE_COUNTER = 'decreaseCounter';
const INCREASE_COUNTER = 'increaseCounter';
const COUNTER_STEP = .5;
const RESET_STATE = 'resetState';
const SET_FORM = 'setForm';

const DEFAULT_FORM_VALUE = {
    name: '',
    text: '',
    rating: 1,
    reviewId: undefined
};

const reducer = (state, action) => {
    switch (action.type) {
        case SET_NAME:
            return {
                ...state,
                name: action.payload,
                text : DEFAULT_FORM_VALUE.text,
                rating: DEFAULT_FORM_VALUE.rating,
             };
        case SET_TEXT:
            return { ...state, text: action.payload };
        case INCREASE_COUNTER:
            return { ...state, rating: state.rating + COUNTER_STEP };
        case DECREASE_COUNTER:
            return { ...state, rating: state.rating - COUNTER_STEP };
        case RESET_STATE:
            return DEFAULT_FORM_VALUE;
        case SET_FORM:
            return {
                ...state,
                name: action.payload.name,
                text: action.payload.text,
                rating: action.payload.rating,
                reviewId: action.payload.id,
            };
        default:
            return state;
    }
};

export const ReviewForm = ({ restaurantId, review, className }) => {
    const [formValue, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);
    const [createReview] = useCreateReviewMutation();
    const [updateReview] = useUpdateReviewMutation();
    useEffect(() => {
        dispatch({ type: RESET_STATE });
    }, [restaurantId]);
    const { data: user } = useGetUsersQuery(undefined, {
        selectFromResult: (result) => {
            return { ...result, data: result?.data?.find((user) => user) };
        }
    });
    if (review?.id !== formValue.reviewId) {
        dispatch({ type: SET_FORM, payload: { ...review, name: review.name ? review.name : user.name } });
    }
    return (
        <div className={classNames(styles.reviewForm, className)}>
            <div className={styles.inputContainer}>
                <label htmlFor='name' className={styles.reviewLabel}>Имя</label>
                <input
                  id="name"
                  type="text"
                  value={formValue.name}
                  onChange={(e) => dispatch({ type: SET_NAME, payload: e.target.value })}
                  className={styles.input} />
            </div>
            <div className={styles.inputContainer}>
                <label htmlFor='text' className={styles.reviewLabel}>Текст</label>
                <textarea
                  id="text"
                  type="text"
                  rows="5"
                  value={formValue.text}
                  onChange={(e) => dispatch({ type: SET_TEXT, payload: e.target.value })}
                  className={styles.input} />
            </div>
            <div className={styles.counterContainer}>
                <Counter value={formValue.rating}
                    decrease={() => dispatch({ type: DECREASE_COUNTER })}
                    increase={() => dispatch({ type: INCREASE_COUNTER })} 
                    className={styles.counter} type='primary' size='large' min={1} max={5} />
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.button}
                    onClick={() => {
                        if (review) {
                            updateReview({
                                reviewId: review.id,
                                review: { ...formValue, userId: user.id }
                            });
                        } else {
                            createReview({
                                restaurantId,
                                newReview: { ...formValue, userId: user.id }
                            });
                        }
                }}> Сохранить</button>
            </div>
        </div>
    );
};