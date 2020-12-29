import {equateValuesToKey} from '../utils/functions';

export const APP_TYPES = {
    SET_DARK_THEME: true,
    SET_LIGHT_THEME: true,
    SET_THEME: true,
    SET_NOTIFY: true,
    START_LOADING: true,
    STOP_LOADING: true
};

equateValuesToKey(APP_TYPES);

export const AUTH_TYPES = {
    LOGIN_SUCCESS: true,
    SIGN_IN_SUCCESS: true,
    SIGN_UP_SUCCESS: true,
    SIGN_OUT_SUCCESS: true
};

equateValuesToKey(AUTH_TYPES);

export const POST_TYPES = {
    CREATE_POST: true,
};

equateValuesToKey(POST_TYPES);
