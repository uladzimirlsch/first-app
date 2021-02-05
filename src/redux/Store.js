import {combineReducers, createStore} from "redux";
import ProfilePageReducer from "./ProfilePageReducer";
import DialogsPageReducer from "./DialogsPageReducer";
import SidebarPageReducer from "./SidebarPageReducer";
import UsersPageReducer from "./UsersPageReducer";
import AuthenticReducer from "./AuthenticReducer"

let reducerMass = combineReducers({
    profilePage: ProfilePageReducer,
    dialogsPage: DialogsPageReducer,
    sidebarPage: SidebarPageReducer,
    usersPage: UsersPageReducer,
    authentication: AuthenticReducer,
})
let store = createStore(reducerMass)

window.store =  store

export default store