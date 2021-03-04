const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Michael'},
        {id: 2, name: 'Aleksandr'},
        {id: 3, name: 'Natalie'},
        {id: 4, name: 'Andrew'},
        {id: 5, name: 'Marina'},
    ],
    messages: [{}],
}

const dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 1, message: action.newMessage}],
            }
        default:
            return state
    }
}

export const addMessage = (newMessage) => ({type: ADD_MESSAGE, newMessage})

export default dialogsPageReducer