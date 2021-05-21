import { RootState } from './redux-store';

export const getDialogs = (state: RootState) =>
  state.messages.dialogs;

export const getMessages = (state: RootState) =>
  state.messages.messages;
