import { Counter } from '../counter/component';
import { useCallback, useEffect, useReducer } from 'react';

const SET_NAME = 'setName';
const SET_TEXT = 'setText';
const DECREASE_COUNTER = 'decreaseCounter';
const INCREASE_COUNTER = 'increaseCounter';
const COUNTER_STEP = .5;
const RESET_STATE = 'resetState';

const DEFAULT_FORM_VALUE = {
    name: '',
    text: '',
    counter: 1,
};

const reducer = (state, action) => {
    switch (action.type) {
        case SET_NAME:
            return { 
                ...state, 
                name: action.payload,
                text : DEFAULT_FORM_VALUE.text,
                counter: DEFAULT_FORM_VALUE.counter,
             };
        case SET_TEXT:
            return { ...state, text: action.payload };
        case INCREASE_COUNTER:
            return { ...state, counter: state.counter + action.payload };
        case DECREASE_COUNTER:
            return { ...state, counter: state.counter - action.payload };
        case RESET_STATE:
            return DEFAULT_FORM_VALUE;
        default:
            return state;
    }
};

export const ReviewForm = ({ restaurantId }) => {
    const [formValue, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);
    const decrease = useCallback(() => dispatch({ type: DECREASE_COUNTER, payload: COUNTER_STEP }), []);
    const increase = useCallback(() => dispatch({ type: INCREASE_COUNTER, payload: COUNTER_STEP }), []);
    useEffect(() => {
        //console.log(restaurantId);
        dispatch({ type: RESET_STATE });
    }, [restaurantId]);
    return (
        <div>
            <div>
                <label htmlFor='name'>Имя</label>
                <input
                  id="name"
                  type="text"
                  value={formValue.name}
                  onChange={(e) => dispatch({ type: SET_NAME, payload: e.target.value })} />
            </div>
            <div>
                <label htmlFor='text'>Текст</label>
                <input
                  id="text" 
                  type="text"
                  value={formValue.text}
                  onChange={(e) => dispatch({ type: SET_TEXT, payload: e.target.value })} />
            </div>
            <div>
                <span>Рейтинг</span>
                <Counter value={formValue.counter} decrease={decrease} increase={increase} min={1} max={5} />
            </div>           
        </div>
    );
};