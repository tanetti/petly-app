import { createSlice } from '@reduxjs/toolkit';
import { registerUser, logIn, logOut, refreshUser } from './authOperations';

const initialState = {
  user: {
    email: null,
    name: null,
    address: null,
    phone: null,
    birthday: null,
    avatarURL: null,
    favoriteNotices: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: true,
  isPending: false,
  wasRegistered: false,
  error: null,
  refreshError: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetError: state => {
      state.error = null;
    },
    resetWasRegistered: state => {
      state.wasRegistered = false;
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(registerUser.fulfilled, state => {
      state.isPending = false;
      state.wasRegistered = true;
      state.error = null;
    });
    addCase(logIn.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isPending = false;
      state.error = null;
    });
    addCase(logOut.fulfilled, state => {
      state.user = {
        email: null,
        name: null,
        address: null,
        phone: null,
        birthday: null,
        avatarURL: null,
        favoriteNotices: null,
      };
      state.token = null;
      state.isLoggedIn = false;
      state.isPending = false;
      state.error = null;
    });
    addCase(refreshUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.refreshError = null;
    });
    addCase(registerUser.pending, state => {
      state.isPending = true;
      state.error = null;
    });
    addCase(logIn.pending, state => {
      state.isPending = true;
      state.error = null;
    });
    addCase(logOut.pending, state => {
      state.isPending = true;
      state.error = null;
    });
    addCase(refreshUser.pending, state => {
      state.isRefreshing = true;
      state.refreshError = null;
    });
    addCase(registerUser.rejected, (state, action) => {
      state.isPending = false;
      state.error = action.payload;
    });
    addCase(logIn.rejected, (state, action) => {
      state.isPending = false;
      state.error = action.payload;
    });
    addCase(logOut.rejected, (state, action) => {
      state.isPending = false;
      state.error = action.payload;
    });
    addCase(refreshUser.rejected, (state, action) => {
      state.isRefreshing = false;
      state.refreshError = action.payload;
    });
  },
});

export const authReducer = authSlice.reducer;
