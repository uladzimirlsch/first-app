import React, {FC, lazy, Suspense, useEffect} from "react";
import styles from './App.module.scss'
import {Route, Switch} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Preloader from "./commonFiles/preloader/Preloader";
import {RootState} from "./redux/redux-store";
import {InitializedSuccess} from "./redux/app-reducer";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Ads} from "./components/Ads/Ads";
import {UsersContainer} from "./components/Users/UsersContainer";
import {LoginContainer} from "./components/Login/LoginContainer";
import News from "./components/News/News";
import MyMusic from "./components/MyMusic/MyMusic";
import {Photos} from "./components/Photos/Photos";
import {Footer} from "./components/Footer/Footer";


const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer')
    .then(({DialogsContainer}) => ({default: DialogsContainer})),)
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer')
    .then(({ProfileContainer}) => ({default: ProfileContainer})),)

export const App: FC = () => {

    const initialized = useSelector((state: RootState) => state.app.initialized)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(InitializedSuccess())
    }, [])

    if (!initialized) {
        return <Preloader/>
    }

    return (
        <main>
            <Header/>
            <Navbar/>
            <Ads/>
            <div className={styles.content}>
                <Suspense fallback={<Preloader/>}>
                    <Switch>
                        <Route exact path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                        <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                    </Switch>
                </Suspense>
                <Route path={'/users'} render={() => <UsersContainer/>}/>
                <Route path={'/login'} render={() => <LoginContainer/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <MyMusic/>}/>
                <Route path={'/photos'} render={() => <Photos/>}/>
            </div>
            <Footer/>
        </main>
    )
}

