import React, {useMemo} from 'react';
import {Link as RouterLink, Redirect} from 'react-router-dom';
import {reduxForm} from 'redux-form';
import {Grid, Link, ReduxForm, SectionTitle} from '../components';
import {ROUTES} from '../constants/routes';
import {useAuthActions, useAuthSelectors} from '../hooks/auth';
import {getInputsForSignUp} from '../utils/generateInputs';
import {validate} from '../utils/validate';


const Form = reduxForm({
    // Необходимо уникальное имя для формы
    form: 'signUpForm',
    validate,
})(ReduxForm);

const SignUp = () => {
    const inputs = useMemo(() => getInputsForSignUp(), []);

    const {uid} = useAuthSelectors();
    const {onSignUp} = useAuthActions();

    if (uid) return <Redirect to={ROUTES.HOME} />;

    return (
        <React.Fragment>
            <SectionTitle title="Sign up" />

            <Form inputs={inputs} onSubmit={onSignUp} buttonText="Sign Up!">
                <Grid container justify="flex-end">
                    <Grid item>
                        <Link to="/sign_in" variant="body2" component={RouterLink}>
                            Already have an account? Sign in
                        </Link>
                    </Grid>
                </Grid>
            </Form>
        </React.Fragment>
    );
};

export default SignUp;
