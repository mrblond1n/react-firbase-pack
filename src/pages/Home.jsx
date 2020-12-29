import {Grid} from '@material-ui/core';
import React, {useMemo} from 'react';
import {useFirestoreConnect} from 'react-redux-firebase';
import {reduxForm} from 'redux-form';
import {PostList, ReduxForm, SectionTitle} from '../components';
import {usePostActions, usePostSelectors} from '../hooks/post';
import {getInputsForCreatePost} from '../utils/generateInputs';
import {validate} from '../utils/validate';

const Form = reduxForm({
    // Необходимо уникальное имя для формы
    form: 'createPostForm',
    validate,
})(ReduxForm);

const Home = () => {
    useFirestoreConnect([{collection: 'posts'}]);

    const inputs = useMemo(() => getInputsForCreatePost(), []);
    const {onCreatePost, onRemovePost} = usePostActions();
    const {posts} = usePostSelectors();

    return (
        <React.Fragment>
            <SectionTitle title="Home page" />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Form inputs={inputs} onSubmit={onCreatePost} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <PostList items={posts} onClick={onRemovePost} />
                </Grid>
            </Grid>
        </React.Fragment>
    );};

export default Home;
