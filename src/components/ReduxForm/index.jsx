import {Button, TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import React, {useCallback, useRef} from 'react';
import {Field} from 'redux-form';
import {TAG_NAMES} from '../../constants/tags';
import {useComponentDidUpdate} from '../../hooks/lifecycle';
import {getFormElement} from '../../utils/form';


const useStyles = makeStyles(theme => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const ReduxFormFieldHOC = Component => props => {
    // данные, которые передает Redux-form
    const {meta, input} = props;
    const {touched, invalid, error} = meta;

    return <Component
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...props}
    />;
};

const InputWrapped = ReduxFormFieldHOC(TextField);

const RequisitesForm = props => {
    const classes = useStyles();

    const formRef = useRef(null);
    const {
        buttonText = 'Submit',
        children,
        handleSubmit,
        inputs,
        invalid,
        submitting,
    } = props;

    // https://stackoverflow.com/questions/38577224/focus-on-next-field-when-pressing-enter-react-js/41406907
    const handlePressEnter = useCallback(event => {
        if (event.keyCode === 13) {
            const form = event.target.form;
            const index = Array.prototype.indexOf.call(form, event.target);

            form.elements[index + 2].focus();
            event.preventDefault();
        }
    }, []);

    const disabled = invalid || submitting;

    useComponentDidUpdate(() => {
        const button = getFormElement(formRef, TAG_NAMES.BUTTON);
        const input = getFormElement(formRef, TAG_NAMES.INPUT);

        // если форма валидна и активные элемент не input - фокус ставится на кнопку, иначе на input
        return !invalid && document.activeElement.tagName !== TAG_NAMES.INPUT
    	  ? button?.focus()
    	  : input?.focus();
    }, [invalid]);

    return(
        <form className={classes.form} noValidate onSubmit={handleSubmit} ref={formRef}>
            {inputs?.map(input => <Field
                key={input.name}
                {...input}
                component={InputWrapped}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                onKeyDown={handlePressEnter}
            />)}

            <Button
                className={classes.submit}
                disabled={disabled}
                color="primary"
                fullWidth
                type="submit"
                variant="contained"
            >
                {buttonText}
            </Button>

            {children}
        </form>
    );
};

export default React.memo(RequisitesForm);
