const firestoreSelector = state => state.firestore;

export const posts = state => firestoreSelector(state).ordered.posts;
