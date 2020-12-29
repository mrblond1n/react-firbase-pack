export const isLoading = state => appSelector(state).isLoading;
export const notify = state => appSelector(state).notify;
export const theme = state => appSelector(state).theme;

const appSelector = state => state.app;
