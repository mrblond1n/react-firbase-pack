import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {ReactReduxFirebaseProvider} from 'react-redux-firebase';
import ErrorBoundary from './error/CriticalError';
import {useAuthSelectors} from './hooks/auth';
import App from './layouts';
import {rrfProps, store} from './store';


const useStyles = makeStyles(theme => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

function AuthIsLoaded({children}) {
    const classes = useStyles();
    const {isLoaded} = useAuthSelectors();

    if (!isLoaded) return (
        <Backdrop className={classes.backdrop} open>
            <CircularProgress color="inherit" />
        </Backdrop>
    );

    return children;
}


const app = <Provider store={store}>
    <ErrorBoundary>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <AuthIsLoaded>
                <App />
            </AuthIsLoaded>
        </ReactReduxFirebaseProvider>
    </ErrorBoundary>
</Provider>;

render(app, document.getElementById('root'));
