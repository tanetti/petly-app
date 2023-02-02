export const selectNotices = state => state.notices.items;
export const selectIsLoading = state => state.notices.isLoading;
export const selectError = state => state.notices.error;
export const selectFilter = state => state.notices.filter;

export const selectVisibleNotices = state => {
  const notices = selectNotices(state);
  const filter = selectFilter(state);
  const normalizeFilter = filter && filter.toLowerCase();
  return notices.filter(notice =>
    notice.name.toLowerCase().includes(normalizeFilter)
  );
};
