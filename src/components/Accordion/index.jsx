import {Accordion, AccordionDetails, AccordionSummary, Typography,} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';


const useStyles = makeStyles(theme => ({
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function SimpleAccordion({details, title}) {
    const classes = useStyles();

    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>{title}</Typography>
            </AccordionSummary>

            <AccordionDetails>
                <Typography>{details}</Typography>
            </AccordionDetails>
        </Accordion>
    );
}
