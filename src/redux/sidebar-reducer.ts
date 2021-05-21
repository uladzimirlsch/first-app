const initialState = {};

type InitialStateType = typeof initialState;

const sidebarReducer = (
  state = initialState,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  action: any,
): InitialStateType => {
  return state;
};

export default sidebarReducer;
