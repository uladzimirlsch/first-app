import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import sidebarPageReducer from "./sidebarPageReducer";

let store = {
    _state: {
        profilePage: {
            post: [
                {id: 1, message: 'Hello, world.', likes: '25'},
                {id: 2, message: 'It is my first post.', likes: '15'},
                {id: 3, message: "That's a good network.", likes: '38'}
            ],
            newPostText: 'Hello'
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
            newMessageBody: ''
        },
        sidebarPage: {}
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
    dispatch(action) {
        this._state.profilePage = profilePageReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action)
        this._state.sidebarPage = sidebarPageReducer(this._state.sidebarPage, action)
        this._callSubscriber(this._state)
    }
}
export default store;

window.store = store