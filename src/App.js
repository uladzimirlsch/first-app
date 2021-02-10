import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import News from "./components/News/News";
import MyMusic from "./components/MyMusic/MyMusic";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import Login from "./components/Login/Login";



const App = () => {
	return (
			<div className={"app-study"}>
				<HeaderContainer/>
				<Navbar/>
				<div className={'app-study-content'}>
					<Route path={'/profile/:userId?'} render={() => <ProfileContainer />}/>
					<Route path={'/dialogs'} render={() => <DialogsContainer />}/>
					<Route path={'/users'} render={() => <UsersContainer />}/>
					<Route path={'/login'} render={() => <Login />}/>
					<Route path={'/news'} render={() => <News/>}/>
					<Route path={'/music'} render={() => <MyMusic/>}/>
					<Route path={'/settings'} render={() => <Settings/>}/>
				</div>
			</div>
	);
}
export default App;
