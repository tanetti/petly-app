import { createSlice } from '@reduxjs/toolkit';
import { fetchNotices, addNotices, deleteNotices } from './operations';
import initialNotices from '../../pages/NoticesPage/notices';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

console.log(initialNotices);
const noticeInitialState = {
  items: initialNotices,
  isLoading: false,
  error: null,
  filter: '',
};

const noticesSlice = createSlice({
  name: 'contacts',
  initialState: noticeInitialState,

  reducers: {
    filterNotice(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchNotices.pending]: handlePending,
    [fetchNotices.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchNotices.rejected]: handleRejected,
    [addNotices.pending]: handlePending,
    [addNotices.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addNotices.rejected]: handleRejected,
    [deleteNotices.pending]: handlePending,
    [deleteNotices.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const idx = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(idx, 1);
    },
    [deleteNotices.rejected]: handleRejected,
  },
});

export const { filterNotice } = noticesSlice.actions;

export const contactsReducer = noticesSlice.reducer;
