export const selectUserId = state => state.auth.userId;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectIsPending = state => state.auth.isPending;

export const selectWasRegistered = state => state.auth.wasRegistered;

export const selectError = state => state.auth.error;

export const selectRefreshError = state => state.auth.refreshError;
