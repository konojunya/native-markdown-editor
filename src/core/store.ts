import {
  applyMiddleware,
  createStore,
  Store,
  Action as ReduxAction
} from "redux";
import { rootReducer, RootState } from "./reducer";
import thunk, { ThunkDispatch, ThunkAction } from "redux-thunk";

export type Dispatch<A extends ReduxAction> = ThunkDispatch<
  RootStore,
  undefined,
  A
>;
export type Action<R, A extends ReduxAction> = ThunkAction<
  R,
  RootState,
  undefined,
  A
>;
export type RootStore = Store<RootState>;

export const configureStore = (preloadedState = {}) => {
  const middlewares = [thunk];

  if (process.env.NODE_ENV !== "production") {
    middlewares.push(require("redux-logger").logger);
  }

  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  );
};
