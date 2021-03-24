import {BaseThunk, InferValuesType} from "./redux-store";
import {authAccess} from "./auth-reducer";

let initialState = {
    initialized: false
}

type InitialState = typeof initialState

const appReducer = (state = initialState, action: ActionsType): InitialState => {
    switch (action.type) {
        case 'GET_INITIALIZED':
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}

type ActionsType = InferValuesType<typeof actions>

const actions = {
    getInitialized: () => ({type: 'GET_INITIALIZED'} as const)
}

type ThunkActionType = BaseThunk<ActionsType>

export const InitializedSuccess = (): ThunkActionType =>
    async (dispatch) => {
        let resolved = dispatch(authAccess())
        await Promise.all([resolved])
        dispatch(actions.getInitialized())
    }

export default appReducer