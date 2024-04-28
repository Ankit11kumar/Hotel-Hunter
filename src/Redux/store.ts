import {
  Action,
  Dispatch,
  EnhancedStore,
  StateFromReducersMapObject,
  ThunkAction,
  ThunkDispatch,
  UnknownAction,
  configureStore,
} from "@reduxjs/toolkit";
import rootReducer, { reducersMap } from "./rootReducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const initStore = (preloadedState?: Partial<RootState>): EnhancedStore =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    devTools: String(process.env.NODE_ENV).trim() !== "production",
  });

export type Store = ReturnType<typeof initStore>;
export type RootState = StateFromReducersMapObject<typeof reducersMap>;
export type AppDispatch = Store["dispatch"];
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
export const useAppDispatch = (): Dispatch<UnknownAction> &
ThunkDispatch<RootState, undefined, UnknownAction> =>
  useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

