import {Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from '@material-ui/core';
import React from 'react';
import {Accordion} from '../';


const NotFound = ({alt, details, children, image, title}) => (
    <Card>
        <CardActionArea>
            {image && <CardMedia alt={alt} component="img" image={image} />}

            <CardContent>
                {details
				  ? <Accordion title={title} details={details} />
				  : <Typography gutterBottom variant="h5" component="h2">{title}</Typography>
                }
            </CardContent>
        </CardActionArea>

        <CardActions>{children}</CardActions>
    </Card>
);

export default NotFound;
