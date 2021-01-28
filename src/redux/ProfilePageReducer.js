const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
	post: [
		{id: 1, message: 'Hello. It is my first post.', likes: 25},
		{id: 2, message: "That's a good network.", likes: 38}
	],
	newPostText: ''
}
const profilePageReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				post: [...state.post, {
					id: 4,
					message: state.newPostText,
					likes: 0
				}],
				newPostText: ''
			}
		case UPDATE_NEW_POST_TEXT:
			return {
				...state,
				newPostText: action.newText
			}
		default:
			return state
	}
}
export const addPostAC = () => ({type: ADD_POST})
export const updateNewPostTextAC = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export default profilePageReducer