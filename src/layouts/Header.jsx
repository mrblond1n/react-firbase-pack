import {IconButton} from '@material-ui/core';
import {Brightness4 as Dark, Brightness7 as Light} from '@material-ui/icons';
import React, {useCallback} from 'react';
import {Link} from 'react-router-dom';
import {AppBar, AvatarBall, CssBaseline, Tab, Tabs, Toolbar,} from '../components';
import {THEMES} from '../constants/theme';
import {useAppActions, useAppSelectors} from '../hooks/app';
import {useAuthActions, useAuthSelectors} from '../hooks/auth';
import {pages} from '../router';


const Header = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = useCallback((event, newValue) => setValue(newValue), []);

    const {isEmpty, profile} = useAuthSelectors();
    const {onChangeTheme} = useAppActions();
    const {theme} = useAppSelectors();
    const {onSignOut} = useAuthActions();

    const initials = profile?.initials;

    return <React.Fragment>
        <CssBaseline />

        <AppBar position="relative">
            <Toolbar>
                <AvatarBall initials={initials} />

                <Tabs value={value} onChange={handleChange}>
                    {pages
                        .filter(page => page.isEmpty === isEmpty)
                        .map(({path, label}, index) =>
                            <Tab
                                key={path}
                                component={Link}
                                label={label}
                                to={path}
                                value={index}
                            />
                        )}
                </Tabs>

                {!isEmpty && <Tab label="выход" onClick={onSignOut} />}

                <div style={{flex: 1}} />

                <IconButton color="inherit" aria-label="change theme" onClick={onChangeTheme}>
                    {theme === THEMES.DARK ? <Light fontSize="large" /> : <Dark fontSize="large" />}
                </IconButton>
            </Toolbar>
        </AppBar>
    </React.Fragment>;
};

export default React.memo(Header);
