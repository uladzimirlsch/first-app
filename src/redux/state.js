let renderEntireTree = () => {

}

let state = {
    profilePage: {
        myPostData: [
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
}

window.state = state

export const addPost = () => {
    let addMyPost = {
        id: 4,
        message: state.profilePage.newPostText,
        likes: 0
    }
    state.profilePage.myPostData.push(addMyPost)
    state.profilePage.newPostText = ''
    renderEntireTree(state)
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = (newText)
    renderEntireTree(state)
}

export const subscribe = (observer) => {
    renderEntireTree = observer
}

export default state;