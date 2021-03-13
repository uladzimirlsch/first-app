import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer"
import thunkMiddleware from "redux-thunk"

let rootReducer = combineReducers({
    profile: profileReducer,
    messages: messagesReducer,
    sidebar: sidebarReducer,
    users: usersReducer,
    auth: authReducer,
})

type RootReducer = typeof rootReducer

export type RootState = ReturnType<RootReducer>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store =  store

export default store
