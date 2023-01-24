import { createSlice } from '@reduxjs/toolkit';
import { registerUser, logIn, logOut, refreshUser } from './authOperations';

const initialState = {
  user: {
    name: null,
    email: null,
    address: null,
    phone: null,
    birthday: null,
    favoritePets: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: true,
  isPending: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: ({ addCase }) => {
    addCase(registerUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isPending = false;
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
        name: null,
        email: null,
        address: null,
        phone: null,
        birthday: null,
        favoritePets: null,
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
      state.error = null;
    });
    addCase(registerUser.pending, state => {
      state.isPending = true;
    });
    addCase(logIn.pending, state => {
      state.isPending = true;
    });
    addCase(logOut.pending, state => {
      state.isPending = true;
    });
    addCase(refreshUser.pending, state => {
      state.isRefreshing = true;
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
      state.error = action.payload;
    });
  },
});

export const authReducer = authSlice.reducer;
