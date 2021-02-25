import profilePageReducer, {addPost} from "./ProfilePageReducer";

let state = {
    post: [
        {id: 1, message: 'Hello. It is my first post.', likes: 25},
        {id: 2, message: 'Hello.', likes: 25}
    ],
}

test('length of posts should be incremented', () => {
    let action = addPost('Hello')

    let newState = profilePageReducer({state},{action})
    expect(newState.post.length).toBe(3)
})