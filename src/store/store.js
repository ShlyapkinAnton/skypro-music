import { configureStore } from '@reduxjs/toolkit';
import tracksReducer from './slices/trackSlice';
import authReducer from './slices/authorizationSlice';
import { tokenQuery } from '../serviseQuery/token';
import { tracksQuery } from '../serviseQuery/tracks';

export const store = configureStore({
  reducer: {
    tracks: tracksReducer,
    auth: authReducer,
    [tracksQuery.reducerPath]: tracksQuery.reducer,
    [tokenQuery.reducerPath]: tokenQuery.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(tracksQuery.middleware)
      .concat(tokenQuery.middleware),
})
