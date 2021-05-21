import { BaseThunk, InferValuesType } from './redux-store';
import { authAccess } from './auth-reducer';

const actions = {
  getInitialized: () => ({ type: 'GET_INITIALIZED' } as const),
};

type ActionsType = InferValuesType<typeof actions>;

type ThunkActionType = BaseThunk<ActionsType>;

const initialState = {
  initialized: false,
};

type InitialState = typeof initialState;

const appReducer = (
  state = initialState,
  action: ActionsType,
): InitialState => {
  switch (action.type) {
    case 'GET_INITIALIZED':
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const InitializedSuccess =
  (): ThunkActionType => async (dispatch) => {
    const resolved = dispatch(authAccess());
    await Promise.all([resolved]);
    dispatch(actions.getInitialized());
  };

export default appReducer;
