import {DialogsType, MessagesType} from "../types/types";

const ADD_MESSAGE = 'first-app/messages/ADD-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Michael'},
        {id: 2, name: 'Aleksandr'},
        {id: 3, name: 'Natalie'},
    ] as Array<DialogsType>,
    messages: [] as Array<MessagesType>
}

type InitialStateType = typeof initialState

const messagesReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 0, message: action.newMessage}],
            }
        default:
            return state
    }
}

type AddMessageActionType = {
    type: typeof ADD_MESSAGE
    newMessage: string | null
}
export const addMessage = (newMessage: string | null): AddMessageActionType => ({type: ADD_MESSAGE, newMessage})


export default messagesReducer