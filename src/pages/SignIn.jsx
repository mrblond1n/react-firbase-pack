import React, {useMemo} from 'react';
import {Link as RouterLink, Redirect} from 'react-router-dom';
import {reduxForm} from 'redux-form';
import {Grid, Link, ReduxForm, SectionTitle} from '../components';
import {ROUTES} from '../constants/routes';
import {useAuthActions, useAuthSelectors} from '../hooks/auth';
import {getInputsForSignIn} from '../utils/generateInputs';
import {validate} from '../utils/validate';


const Form = reduxForm({
    // Необходимо уникальное имя для формы
    form: 'signInForm',
    validate,
})(ReduxForm);

const SignIn = () => {
    const inputs = useMemo(() => getInputsForSignIn(), []);

    const {uid} = useAuthSelectors();
    const {onSignIn} = useAuthActions();

    if (uid) return <Redirect to={ROUTES.HOME} />;

    return (
        <React.Fragment>
            <SectionTitle title="Sign in" />

            <Form inputs={inputs} onSubmit={onSignIn} buttonText="Sign In!">
                <Grid container>
                    <Grid item xs>
                        <Link to="/recover_password" variant="body2" component={RouterLink}>
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to="/sign_up" variant="body2" component={RouterLink}>
                            {'Don\'t have an account? Sign Up'}
                        </Link>
                    </Grid>
                </Grid>
            </Form>
        </React.Fragment>
    );
};

export default SignIn;

