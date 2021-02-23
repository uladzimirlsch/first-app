import {applyMiddleware, combineReducers, createStore} from "redux";
import ProfilePageReducer from "./ProfilePageReducer";
import DialogsPageReducer from "./DialogsPageReducer";
import SidebarPageReducer from "./SidebarPageReducer";
import UsersPageReducer from "./UsersPageReducer";
import AuthReducer from "./AuthReducer"
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'

let reducerMass = combineReducers({
    profilePage: ProfilePageReducer,
    dialogsPage: DialogsPageReducer,
    sidebarPage: SidebarPageReducer,
    usersPage: UsersPageReducer,
    auth: AuthReducer,
    form: formReducer
})
let store = createStore(reducerMass, applyMiddleware(thunkMiddleware))

window.store =  store

export default store