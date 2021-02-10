import {applyMiddleware, combineReducers, createStore} from "redux";
import ProfilePageReducer from "./ProfilePageReducer";
import DialogsPageReducer from "./DialogsPageReducer";
import SidebarPageReducer from "./SidebarPageReducer";
import UsersPageReducer from "./UsersPageReducer";
import AuthReducer from "./AuthReducer"
import thunkMiddleware from "redux-thunk"

let reducerMass = combineReducers({
    profilePage: ProfilePageReducer,
    dialogsPage: DialogsPageReducer,
    sidebarPage: SidebarPageReducer,
    usersPage: UsersPageReducer,
    authentication: AuthReducer,
})
let store = createStore(reducerMass, applyMiddleware(thunkMiddleware))

window.store =  store

export default store