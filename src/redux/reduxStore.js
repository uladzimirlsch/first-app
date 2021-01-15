import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import sidebarPageReducer from "./sidebarPageReducer";
import usersPageReducer from "./usersPageReducer";

let reducerMass = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sidebarPage: sidebarPageReducer,
    usersPage: usersPageReducer
})
let store = createStore(reducerMass)

window.store =  store

export default store