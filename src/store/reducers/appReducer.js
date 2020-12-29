import {THEMES} from '../../constants/theme';
import {APP_TYPES} from '../../constants/types';

const INITIAL_STATE = {
    notify: {hidden: true},
    isLoading: false,
    theme: THEMES.DARK
};

const projectReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;

    switch (type) {
        case APP_TYPES.SET_THEME:
            return {...state, theme: payload};
        case APP_TYPES.SET_NOTIFY:
            return {...state, notify: payload};
        case APP_TYPES.START_LOADING:
            return {...state, isLoading: true};
        case APP_TYPES.STOP_LOADING:
            return {...state, isLoading: false};
        default:
            return state;
    }
};

export default projectReducer;
