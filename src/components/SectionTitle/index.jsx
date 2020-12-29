import {Typography} from '@material-ui/core';
import React from 'react';

const SectionTitle = ({title}) => <Typography component="h1" variant="h3">{title}</Typography>;

export default React.memo(SectionTitle);
