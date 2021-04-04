import React, {FC, lazy, Suspense, useEffect} from "react";
import './App.css';
import 'antd/dist/antd.css'
import {Link, Route, Switch} from "react-router-dom";
import {UsersContainer} from "./components/Users/UsersContainer";
import News from "./components/News/News";
import MyMusic from "./components/MyMusic/MyMusic";
import Photos from "./components/Photos/Photos";
import Preloader from "./commonFiles/preloader/Preloader";
import {LoginContainer} from "./components/Login/LoginContainer";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./redux/redux-store";
import {InitializedSuccess} from "./redux/app-reducer";
import {Layout, Menu} from 'antd';
import {SettingOutlined, TeamOutlined, UserOutlined} from '@ant-design/icons';
import {Header} from "./components/Header/Header";

const {SubMenu} = Menu;
const {Content, Footer, Sider} = Layout;

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

    return (<Layout>
        <Header/>
        <Content style={{padding: '0 100px'}}>
            {/*<Breadcrumb style={{margin: '16px 0'}}>*/}
            {/*    <Breadcrumb.Item>Home</Breadcrumb.Item>*/}
            {/*    <Breadcrumb.Item>List</Breadcrumb.Item>*/}
            {/*    <Breadcrumb.Item>App</Breadcrumb.Item>*/}
            {/*</Breadcrumb>*/}
            <Layout className="site-layout-background" style={{padding: '24px 0'}}>
                <Sider className="site-layout-background" width={250}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['0']}
                        defaultOpenKeys={['0']}
                        style={{height: '100%'}}
                    >
                        <SubMenu key="sub1" icon={<UserOutlined/>} title="My profile">
                            <Menu.Item key="1"><Link to={'/profile'}>Profile</Link></Menu.Item>
                            <Menu.Item key="2"><Link to={'/dialogs'}>Messenger</Link></Menu.Item>
                            <Menu.Item key="3"><Link to={'/photos'}>Photos</Link></Menu.Item>
                            <Menu.Item key="4"><Link to={'/music'}>Music</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<TeamOutlined/>} title="Users">
                            <Menu.Item key="5"><Link to={'/users'}>Users</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<SettingOutlined />} title="Settings">
                            <Menu.Item key="6">Settings</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Content style={{padding: '0 96px', minHeight: 280}}>
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
                    <Route path={'/photos'} render={() => <Photos/>}/></Content>
            </Layout>
        </Content>
        <Footer style={{textAlign: 'center'}}>©2021 Created by LSCH</Footer>
    </Layout>)
    //     <div className={"app-study"}>
    //         <Header/>
    //         <NavbarLeft/>
    //         <div className={'app-study-content'}
    //         </div>
    //     </div>
    // );
}

