import {makeStyles} from '@material-ui/core/styles';
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Container, Notify} from '../components';
import NotFound from '../error/404';
import {pages} from '../router';
import PageRoute from '../router/PageRoute';


const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}));

const Content = () => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Switch>
                    {pages.map(page => <PageRoute key={page.path} exact {...page} />)}
                    <Route component={NotFound} />
                </Switch>
            </div>

            <Notify />
        </Container>
    );
};

export default React.memo(Content);
