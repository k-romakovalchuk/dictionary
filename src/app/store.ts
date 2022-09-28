import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import wordsReducer from '../features/wordsSlice';

export const store = configureStore({
  reducer: wordsReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;
