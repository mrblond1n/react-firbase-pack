import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {THEMES} from '../constants/theme';
import * as selectors from '../store/selectors';
import * as actions from '../store/actions';

export const useAppSelectors = () => {
    const isLoading = useSelector(selectors.isLoading);
    const notify = useSelector(selectors.notify);
    const theme = useSelector(selectors.theme);

    return {
        isLoading,
        notify,
        theme,
    };
};

export const useAppActions = () => {
    const dispatch = useDispatch();
    const {theme, notify} = useAppSelectors();

    const onChangeTheme = useCallback(() =>
        dispatch(actions.setTheme(theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK)), [dispatch, theme]);

    const onHideNotify = useCallback(() => dispatch(actions.setNotify({...notify, hidden: true})), [dispatch, notify]);

    return {
        onChangeTheme,
        onHideNotify,
    };
};
