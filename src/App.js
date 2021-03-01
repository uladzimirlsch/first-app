import React, {Suspense} from "react";
import './App.css';
import {Route} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import News from "./components/News/News";
import MyMusic from "./components/MyMusic/MyMusic";
import Settings from "./components/Settings/Settings";
import NavbarRight from "./components/NavbarRight/NavbarRight";
import Login from "./components/Login/LoginForm";
import Preloader from "./commonFiles/preloader/Preloader";

// import ProfileContainer from "./components/Profile/ProfileContainer";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

const App = () => {
    return (
        <div className={"app-study"}>
            <HeaderContainer/>
            <Navbar/>
            <NavbarRight/>
            <div className={'app-study-content'}>
                <Route path={'/profile/:userId?'} render={() => <Suspense fallback={<Preloader/>}>
                    <ProfileContainer/>
                </Suspense>}/>
                <Route path={'/dialogs'} render={() => <Suspense fallback={<Preloader/>}>
                    <DialogsContainer/>
                </Suspense>
                }/>
                <Route path={'/users'} render={() => <UsersContainer/>}/>
                <Route path={'/login'} render={() => <Login/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <MyMusic/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>
        </div>
    );
}
export default App;
