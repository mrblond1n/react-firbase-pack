import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {ROUTES} from '../constants/routes';
import {useAuthSelectors} from '../hooks/auth';


const PageRoute = ({
    component: Component,
    ...rest
}) => {
    const {uid} = useAuthSelectors();

    if (!rest.protect) return <Route {...rest} render={props => <Component {...props} />} />;

    return <Route {...rest} render={props => uid
	  ? <Component {...props} />
	  : <Redirect to={ROUTES.SIGN_IN} />
    } />;
};

export default PageRoute;
