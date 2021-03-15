import profilePageReducer from "./profile-reducer";

let state = {
    post: [
        {id: 1, message: 'Hello. It is my first post.', likes: 25},
        {id: 2, message: 'Hello.', likes: 25}
    ],
}

test('length of posts should be incremented', () => {
    // let action = addPost('Hello')

    // @ts-ignore
    let newState = profilePageReducer({state},{action})
    // @ts-ignore
    expect(newState.post.length).toBe(3)
})