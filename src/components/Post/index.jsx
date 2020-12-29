import {IconButton, ListItem, ListItemText} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React, {useCallback} from 'react';

const Post = ({id, text, title, onClick}) => {
    const handleClick = useCallback(() => onClick(id), [id, onClick]);

    return (
        <ListItem>
            <ListItemText primary={title} secondary={text} />
            <IconButton aria-label="delete" onClick={handleClick}>
                <DeleteIcon fontSize="small" />
            </IconButton>
        </ListItem>
    );
};

export default React.memo(Post);
