import {COLLECTIONS} from '../../constants/collections';
import {APP_TYPES} from '../../constants/types';
import {getErrorInfo, getSuccessInfo} from '../../utils/appInfo';

const handleSuccess = ({dispatch, text}) => {
    dispatch({type: APP_TYPES.SET_NOTIFY, payload: getSuccessInfo(text)});
    dispatch({type: APP_TYPES.STOP_LOADING});
};

const handleFailed = ({dispatch, error}) => {
    dispatch({type: APP_TYPES.SET_NOTIFY, payload: getErrorInfo(error)});
    dispatch({type: APP_TYPES.STOP_LOADING});
};

export const createPost = (post, uid) => (dispatch, dummy, {getFirestore}) => {
    const firestore = getFirestore();

    dispatch({type: APP_TYPES.START_LOADING});
    firestore.collection(COLLECTIONS.posts).add({...post, uid})
        .then(() => handleSuccess({dispatch, text: 'Created'}), error => handleFailed({dispatch, error}));
};

export const removePost = id => (dispatch, dummy, {getFirestore}) => {
    const firestore = getFirestore();

    dispatch({type: APP_TYPES.START_LOADING});
    firestore.collection(COLLECTIONS.posts).doc(id).delete()
        .then(() => handleSuccess({dispatch, text: 'Removed'}), error => handleFailed({dispatch, error}));
};
