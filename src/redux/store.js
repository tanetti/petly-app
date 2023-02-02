import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { authReducer } from './auth/authSlice';
import { newsApi } from './news/newsApi';
import { servicesApi } from './services/servicesApi';
import { noticesApi } from './notices/noticesApi';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  newsApi.middleware,
  servicesApi.middleware,
  noticesApi.middleware,
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    [newsApi.reducerPath]: newsApi.reducer,
    [servicesApi.reducerPath]: servicesApi.reducer,
    [noticesApi.reducerPath]: noticesApi.reducer,
  },
  middleware,
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
