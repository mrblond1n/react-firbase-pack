import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../store/actions';
import * as selectors from '../store/selectors';


export const useAuthActions = () => {
    const dispatch = useDispatch();

    const handleSignIn = useCallback(data => dispatch(actions.signIn(data)), [dispatch]);
    const handleSignOut = useCallback(() => dispatch(actions.signOut()), [dispatch]);
    const handleSignUp = useCallback(data => dispatch(actions.signUp(data)), [dispatch]);

    return {
    	onSignIn: handleSignIn,
        onSignOut: handleSignOut,
        onSignUp: handleSignUp,
    };
};


export const useAuthSelectors = () => {
    const isEmpty = useSelector(selectors.isEmpty);
    const isLoaded = useSelector(selectors.isLoaded);
    const profile = useSelector(selectors.profile);
    const uid = useSelector(selectors.uid);

    return {
        isEmpty,
        isLoaded,
        profile,
        uid,
    };
};
