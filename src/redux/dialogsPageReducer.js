const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
	dialogs: [
		{id: 1, name: 'Сергей'},
		{id: 2, name: 'Александр'},
		{id: 3, name: 'Наталья'},
		{id: 4, name: 'Андрей'},
		{id: 5, name: 'Татьяна'}
	],
	messages: [
		{id: 1, message: 'Hello!'},
		{id: 2, message: 'How are you?'},
		{id: 3, message: 'Have a nice day.'},
		{id: 4, message: 'I miss you..'},
		{id: 5, message: 'Happy New Year!'}
	],
	newMessageBody: ''
}
const dialogsPageReducer = (state = initialState, action) => {
	let copyState = {...state}
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			copyState.newMessageBody = action.newBody
			return copyState
		case ADD_MESSAGE:
			let newMessage = {
				id: 6,
				message: copyState.newMessageBody
			}
			copyState.messages.push(newMessage)
			copyState.newMessageBody = ''
			return copyState
		default:
			return state
	}
}
export const addMessageCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({
	type: UPDATE_NEW_MESSAGE_BODY,
	newBody: body
})
export default dialogsPageReducer