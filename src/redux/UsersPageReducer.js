const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const CURRENT_PAGE = 'CURRENT-PAGE'
const TOTAL_COUNT = 'TOTAL-COUNT'

let initialState = {
	users: [],
	pageSize: 10,
	totalCount: 0,
	currentPage: 1,
}
const usersPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(u => (u.id === action.userID) ? {...u, followed: true} : u)
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(u => (u.id === action.userID) ? {...u, followed: false} : u)
			}
		case SET_USERS:
			return {
				...state,
				users: action.users
			}
		case CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage
			}
			case TOTAL_COUNT:
			return {
				...state,
				totalCount: action.count,
			}
		default:
			return state
	}
}
export const followAC = (userID) => ({type: FOLLOW, userID})
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type: CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalCount) => ({type: TOTAL_COUNT, count: totalCount})
export default usersPageReducer