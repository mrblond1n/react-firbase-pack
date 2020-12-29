import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {useAppSelectors} from '../hooks/app';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';


const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    }
}));

const App = () => {
    const classes = useStyles();

    const {theme} = useAppSelectors();
    const prefersDarkMode = useMediaQuery(theme);

    const muiTheme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );

    return (
        <ThemeProvider theme={muiTheme}>
            <div className={classes.root}>
                <Router>
                    <Header />

                    <Content />

                    <Footer />
                </Router>
            </div>
        </ThemeProvider>
    );
};

export default React.memo(App);
