import {Avatar} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React from 'react';

const useStyles = makeStyles(theme => ({
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
}));

const AvatarBall = ({initials}) => {
    const classes = useStyles();

    return (
        <Avatar className={classes.avatar}>
            {initials || <LockOutlinedIcon />}
        </Avatar>
    );
};

export default React.memo(AvatarBall);
