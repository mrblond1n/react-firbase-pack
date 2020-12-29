import {Snackbar} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import React from 'react';
import {useAppActions, useAppSelectors} from '../../hooks/app';

const Alert = props => <MuiAlert elevation={6} variant="filled" {...props} />;
const anchorOrigin = {vertical: 'bottom', horizontal: 'right',};

const Notify = () => {
    const {onHideNotify} = useAppActions();
    const {notify} = useAppSelectors();

    return (
        <Snackbar
            anchorOrigin={anchorOrigin}
            autoHideDuration={3000}
            onClose={onHideNotify}
            open={!notify?.hidden}>
            <Alert onClose={onHideNotify} severity={notify?.theme}>
                {notify?.text}
            </Alert>
        </Snackbar>
    );
};

export default React.memo(Notify);
