import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {reset, submit} from 'redux-form';
import * as actions from '../store/actions';
import * as selectors from '../store/selectors';
import {useAuthSelectors} from './auth';

export const usePostActions = () => {
    const dispatch = useDispatch();
    const {uid} = useAuthSelectors();

    const handleCreatePost = useCallback(data => {
        dispatch(submit('createPostForm'));
        dispatch(actions.createPost(data, uid));
        dispatch(reset('createPostForm'));
    }, [dispatch, uid]);

    const handleRemovePost = useCallback(id => dispatch(actions.removePost(id)), [dispatch]);

    return {
        onCreatePost: handleCreatePost,
        onRemovePost: handleRemovePost
    };
};

export const usePostSelectors = () => {
    const posts = useSelector(selectors.posts);

    return {
        posts
    };
};
