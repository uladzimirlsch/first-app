const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Michael'},
        {id: 2, name: 'Aleksandr'},
        {id: 3, name: 'Natalie'},
        {id: 4, name: 'Andrew'},
        {id: 5, name: 'Marina'},
    ],
    messages: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Have a nice day.'},
        {id: 4, message: 'I miss you..'},
        {id: 5, message: 'Happy New Year!'}
    ],
}

const dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: action.newMessage}],
            }
        default:
            return state
    }
}

export const addMessage = (newMessage) => ({type: ADD_MESSAGE, newMessage})

export default dialogsPageReducer