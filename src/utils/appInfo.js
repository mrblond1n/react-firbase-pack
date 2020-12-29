export const getErrorInfo = error => ({
    hidden: false,
    text: error?.message || 'Unknown error',
    theme: 'error',
});

export const getSuccessInfo = text => ({
    hidden: false,
    text,
    theme: 'success',
});
