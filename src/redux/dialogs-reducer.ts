import {DialogsType, MessagesType} from "../types/types";
import {InferValuesType} from "./redux-store";

let initialState = {
    dialogs: [
        {id: 1, name: 'Michael'},
        {id: 2, name: 'Aleksandr'},
        {id: 3, name: 'Natalie'},
    ] as DialogsType [],
    messages: [] as MessagesType []
}

type InitialState = typeof initialState

const messagesReducer = (state = initialState, action: ActionsType): InitialState => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return {
                ...state,
                messages: [...state.messages, {id: 1, message: action.newMessage}],
            }
        default:
            return state
    }
}

type ActionsType = InferValuesType<typeof actions>

export const actions = {
    addMessage: (newMessage: string | null) => ({type: 'ADD_MESSAGE', newMessage} as const)
}

export default messagesReducer