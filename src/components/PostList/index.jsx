import {List} from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {Post} from '../';
import fade from '../../styles/animation.fade.css';


const useStyles = makeStyles(theme => ({
    demo: {
        backgroundColor: theme.palette.info.light,
        marginTop: 15,
        borderRadius: 4
    },
}));

const PostList = ({items, onClick}) => {
    const classes = useStyles();

    return (
        <List>
            <TransitionGroup>
                {items?.map(post =>
                    <CSSTransition key={post.id} classNames={fade} timeout={500}>
                        <div className={classes.demo}>
                            <Post {...post} onClick={onClick} />
                        </div>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </List>
    );
};

export default React.memo(PostList);
