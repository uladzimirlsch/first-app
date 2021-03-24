import profileReducer, {actions} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, post: 'Hi'}
    ]
}

test('length of posts should be incremented', () => {
    let action = actions.addPost('Hello')
    // @ts-ignore
    let newState = profileReducer({state},{action})

    expect(newState.posts.length).toBe(2)
})