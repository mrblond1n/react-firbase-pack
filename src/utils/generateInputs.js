export const getInputsForCreatePost = () => ([
    {name: 'title', label: 'Заголовок', type: 'text'},
    {name: 'text', label: 'Текст', type: 'text'}
]);

export const getInputsForSignIn = () => ([
    {name: 'email', label: 'E-mail', type: 'email'},
    {name: 'password', label: 'Password', type: 'password'}
]);

export const getInputsForSignUp = () => ([
    {name: 'firstName', label: 'First Name', type: 'text'},
    {name: 'lastName', label: 'Last Name', type: 'text'},
    {name: 'email', label: 'E-mail', type: 'email'},
    {name: 'password', label: 'Password', type: 'password'},
    {name: 'confirmPassword', label: 'Confirm password', type: 'password'},
]);
