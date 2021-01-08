const ADD_POST = 'ADD-POST';

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
        profilePage: {
            post: [
                {id: 1, message: 'Hello, world.', likes: '25'},
                {id: 2, message: 'It is my first post.', likes: '15'},
                {id: 3, message: "That's good network.", likes: '38'}
            ],
            newPostText: 'Hello',
        },

        dialogsPage: {
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
        }
    },
    _callSubscriber() {
        console.log('')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    // _addPost() {
    //     let addMyPost = {
    //         id: 4,
    //         message: this._state.profilePage.newPostText,
    //         likes: 0
    //     }
    //     this._state.profilePage.post.push(addMyPost)
    //     this._state.profilePage.newPostText = ''
    //     this._callSubscriber(this._state)
    // },

    // _updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = (newText)
    //     this._callSubscriber(this._state)
    // },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let addMyPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
                likes: 0
            }
            this._state.profilePage.post.push(addMyPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
            // this._addPost()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
            // this._updateNewPostText(action.newText)
        }
    }

}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export default store;

window.store = store