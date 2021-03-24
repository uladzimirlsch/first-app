import React, {ComponentType, lazy, Suspense} from "react";
import './App.css';
import 'antd/dist/antd.css'
import {Route, Switch, withRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavbarLeft from "./components/Navbar/NavbarLeft";
import {UsersContainer} from "./components/Users/UsersContainer";
import News from "./components/News/News";
import MyMusic from "./components/MyMusic/MyMusic";
import Settings from "./components/Settings/Settings";
import NavbarRight from "./components/Navbar/NavbarRight";
import Preloader from "./commonFiles/preloader/Preloader";
import LoginContainer from "./components/Login/LoginContainer";
import {connect} from "react-redux";
import {RootState} from "./redux/redux-store";
import {compose} from "redux";
import {InitializedSuccess} from "./redux/app-reducer";


const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer')
    .then(({DialogsContainer}) => ({default: DialogsContainer})),)
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));

type StateProps = {
    initialized: boolean
}
type DispatchProps = {
    InitializedSuccess: () => void
}
type  PropsType = StateProps & DispatchProps

class App extends React.Component<PropsType> {

    componentDidMount() {
        this.props.InitializedSuccess()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className={"app-study"}>
                <HeaderContainer/>
                <NavbarLeft/>
                <NavbarRight/>
                <div className={'app-study-content'}>
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
                    <Route path={'/settings'} render={() => <Settings/>}/>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state: RootState): StateProps => ({
    initialized: state.app.initialized,
})

export default compose<ComponentType>(connect<StateProps, DispatchProps, {}, RootState>(mapStateToProps, {
    InitializedSuccess
}), withRouter)(App)
