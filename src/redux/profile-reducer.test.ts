import profileReducer, { actions } from './profile-reducer';

const state = {
  posts: [{ id: 1, post: 'Hi' }],
};

test('length of posts should be incremented', () => {
  const action = actions.addPost('Hello');
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const newState = profileReducer({ state }, { action });

  expect(newState.posts.length).toBe(2);
});
