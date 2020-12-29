import firebase from 'firebase/app';
import {getFirebase} from 'react-redux-firebase';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createFirestoreInstance, getFirestore, reduxFirestore} from 'redux-firestore';
import {reducer} from 'redux-form';
import thunkMiddleware from 'redux-thunk';
import firebaseConfig from '../config';
import * as appReducers from './reducers';

/*
 https://redux-form.com/8.2.2/docs/gettingstarted.md/
 you have to pass formReducer under 'form' key,
 for custom keys look up the docs for 'getFormState'
 */
const formReducers = {form: reducer};
const rootReducer = combineReducers({...appReducers, ...formReducers});

const middlewares = [
    thunkMiddleware.withExtraArgument({getFirebase, getFirestore})
].filter(middleware => middleware);

const reduxFirestoreConfig = {
    useFirestoreForProfile: true,
    attachAuthIsReady: true,
    userProfile: 'users'
};

export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(...middlewares),
        reduxFirestore(firebaseConfig, reduxFirestoreConfig)
    )
);

export const rrfProps = {
    firebase,
    config: firebaseConfig,
    dispatch: store.dispatch,
    createFirestoreInstance,
    userProfile: 'users', // where profiles are stored in database
    presence: 'presence', // where list of online users is stored in database
    sessions: 'sessions'
};
