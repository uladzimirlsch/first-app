import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs"
import News from "./components/News/News";
import MyMusic from "./components/MyMusic/MyMusic";
import Settings from "./components/Settings/Settings";


function App() {
    return (
        <BrowserRouter>
        <div className="app-study">
            <Header/>
            <Navbar/>
            <div className={'app-study-content'}>
                <Route path={'/profile'} component={Profile}/>
                <Route path={'/dialogs'} component={Dialogs}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={MyMusic}/>
                <Route path={'/settings'} component={Settings}/>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
