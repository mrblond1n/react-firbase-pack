const firebaseSelector = state => state.firebase;

export const isEmpty = state => firebaseSelector(state)?.auth.isEmpty;
export const isLoaded = state => firebaseSelector(state)?.auth.isLoaded;
export const uid = state => firebaseSelector(state)?.auth.uid;

export const profile = state => firebaseSelector(state).profile;
