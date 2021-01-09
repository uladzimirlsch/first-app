const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsPageReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newBody
            return state
        case SEND_MESSAGE:
            let newBody = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 6, message: newBody})
            return state
        default:
            return state
    }
}

export const updateNewMessageCreator = () => ({type: UPDATE_NEW_MESSAGE_BODY})

export const sendMessageCreator = (message) => ({
    type: SEND_MESSAGE,
    newBody: message
})

export default dialogsPageReducer