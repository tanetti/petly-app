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
import { currentUserInfoApi } from './currentUserInfo/currentUserInfoApi';
import { ownPetsApi } from './ownPets/ownPetsApi';
import { newsApi } from './news/newsApi';
import { servicesApi } from './services/servicesApi';
import { noticesApi } from './notices/noticesApi';
import { favoriteApi } from './favorite/favoriteApi';
import { singleNoticeApi } from './singleNotice/singleNoticeApi';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  currentUserInfoApi.middleware,
  ownPetsApi.middleware,
  favoriteApi.middleware,
  newsApi.middleware,
  servicesApi.middleware,
  noticesApi.middleware,
  singleNoticeApi.middleware,
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    [currentUserInfoApi.reducerPath]: currentUserInfoApi.reducer,
    [ownPetsApi.reducerPath]: ownPetsApi.reducer,
    [favoriteApi.reducerPath]: favoriteApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [servicesApi.reducerPath]: servicesApi.reducer,
    [noticesApi.reducerPath]: noticesApi.reducer,
    [singleNoticeApi.reducerPath]: singleNoticeApi.reducer,
  },
  middleware,
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
