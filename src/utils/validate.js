export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
// eslint-disable-next-line
const mailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


export const validate = values => {
    const errors = {};
    const requiredFields = [
        'confirmPassword',
        'email',
        'firstName',
        'lastName',
        'password',
        'text',
        'title',
    ];

    requiredFields.forEach(field => {
        if (!values[field]) errors[field] = 'Required';
    });
    if (values.email && !mailRegex.test(values.email)) errors.email = 'Invalid email address';

    return errors;
};
