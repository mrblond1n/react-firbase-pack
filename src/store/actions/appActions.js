import {APP_TYPES} from '../../constants/types';

export const setTheme = payload => ({type: APP_TYPES.SET_THEME, payload});
export const setNotify = payload => ({type: APP_TYPES.SET_NOTIFY, payload});
