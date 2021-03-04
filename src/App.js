import React, {lazy, Suspense} from "react";
import './App.css';
import {Route} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import News from "./components/News/News";
import MyMusic from "./components/MyMusic/MyMusic";
import Settings from "./components/Settings/Settings";
import NavbarRight from "./components/NavbarRight/NavbarRight";
import Preloader from "./commonFiles/preloader/Preloader";
import LoginContainer from "./components/Login/LoginContainer";

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));

const App = () => {
    return (
        <div className={"app-study"}>
            <HeaderContainer/>
            <Navbar/>
            <NavbarRight/>
            <div className={'app-study-content'}>
                <Suspense fallback={<Preloader/>}>
                    <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                    <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                </Suspense>
                <Route path={'/users'} render={() => <UsersContainer/>}/>
                <Route path={'/login'} render={() => <LoginContainer/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <MyMusic/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
