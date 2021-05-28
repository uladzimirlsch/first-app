import { Action, applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import profileReducer from './profile-reducer';
import messagesReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import appReducer from './app-reducer';

const rootReducer = combineReducers({
  app: appReducer,
  profile: profileReducer,
  messages: messagesReducer,
  sidebar: sidebarReducer,
  users: usersReducer,
  auth: authReducer,
});

type RootReducer = typeof rootReducer;

export type RootState = ReturnType<RootReducer>;

export type InferValuesType<T> = T extends {
  [key: string]: (...args: any) => infer U;
}
  ? U
  : never;

export type BaseThunk<A extends Action, R = Promise<void>> = ThunkAction<
  R,
  RootState,
  unknown,
  A
>;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.store = store;

export default store;
