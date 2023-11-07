import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import showReducer from '../features/ShowSlice';

export const store = configureStore({
  reducer: {
    show: showReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
