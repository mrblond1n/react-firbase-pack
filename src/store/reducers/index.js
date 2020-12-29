import app from './appReducer';
import {firestoreReducer as firestore} from 'redux-firestore';
import {firebaseReducer as firebase} from 'react-redux-firebase';

export {
    app,
    firestore,
    firebase,
};
