import {COLLECTIONS} from '../../constants/collections';
import {APP_TYPES, AUTH_TYPES} from '../../constants/types';
import {getErrorInfo} from '../../utils/appInfo';


export const signIn = ({email, password}) => (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(email, password)
	  .then(() => dispatch({type: AUTH_TYPES.SIGN_IN_SUCCESS}))
	  .catch(error => dispatch({type: APP_TYPES.SET_NOTIFY, payload: getErrorInfo(error)}));
};

export const signOut = () => (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signOut()
	  .then(() => dispatch({type: AUTH_TYPES.SIGN_OUT_SUCCESS}))
	  .catch(error => dispatch({type: APP_TYPES.SET_NOTIFY, payload: getErrorInfo(error)}));
};

export const signUp = newUser => (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    const userInfo = {
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0] + newUser.lastName[0]
    };

    firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
	  .then(response => firestore.collection(COLLECTIONS.users).doc(response.user.uid).set(userInfo))
	  .then(() => dispatch({type: AUTH_TYPES.SIGN_UP_SUCCESS}))
	  .catch(error => dispatch({type: APP_TYPES.SET_NOTIFY, payload: getErrorInfo(error)}));
};
