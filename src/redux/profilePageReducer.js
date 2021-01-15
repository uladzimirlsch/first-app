const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
	post: [
		{id: 1, message: 'Hello, world.', likes: 25},
		{id: 2, message: 'It is my first post.', likes: 15},
		{id: 3, message: "That's a good network.", likes: 38}
	],
	newPostText: ''
}
const profilePageReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 4,
				message:state.newPostText,
				likes: 0
			}
			return {
				...state,
				post: [...state.post, newPost],
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
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export default profilePageReducer