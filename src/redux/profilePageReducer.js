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
	let copyState = {
		...state,
		post: [...state.post]
	}
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 4,
				message: copyState.newPostText,
				likes: 0
			}
			copyState.post.push(newPost)
			copyState.newPostText = ''
			return copyState
		case UPDATE_NEW_POST_TEXT:
			copyState.newPostText = action.newText
			return copyState
		default:
			return state
	}
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: text
})
export default profilePageReducer