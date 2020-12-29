import React from 'react';
import {Link} from 'react-router-dom';
import {IMAGES} from '../assets';
import {Button, MessageSplash} from '../components';


const NotFound = () => (
    <MessageSplash alt="error" image={IMAGES.robotExplode} title="Not found">
        <Button size="medium" color="primary" component={Link} to="/" fullWidth>
            Go Home
        </Button>
    </MessageSplash>
);

export default NotFound;
