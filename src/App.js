import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import News from "./components/News/News";
import MyMusic from "./components/MyMusic/MyMusic";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";

const App = () => {
	return (
			<div className={"app-study"}>
				<Header/>
				<Navbar/>
				<div className={'app-study-content'}>
					<Route path={'/profile'} render={() => <Profile />}/>
					<Route path={'/dialogs'} render={() => <DialogsContainer />}/>
					<Route path={'/users'} render={() => <UsersContainer />}/>
					<Route path={'/news'} render={() => <News/>}/>
					<Route path={'/music'} render={() => <MyMusic/>}/>
					<Route path={'/settings'} render={() => <Settings/>}/>
				</div>
			</div>
	);
}
export default App;
