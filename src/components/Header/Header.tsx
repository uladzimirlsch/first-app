import {Link} from "react-router-dom";
import React, {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUserData, userLogin} from "../../redux/auth-selectors";
import {logOut} from "../../redux/auth-reducer";
import {Avatar, Button, Col, Layout, Menu, Row} from "antd";
import {UserOutlined} from "@ant-design/icons";


export const Header: FC = () => {

    const isAuthenticated = useSelector(getUserData)
    const login = useSelector(userLogin)
    const dispatch = useDispatch()

    const logOutside = () => {
        dispatch(logOut())
    }

    const {Header} = Layout;

    return (
        <Header className={'header'}>
            <div className="logo"/>
            <Row>
                <Col span={20}>
                    <Menu theme="dark" mode="horizontal" style={{padding: '0 48px'}} defaultSelectedKeys={['0']}>
                        <Menu.Item key="1"><Link to={'/profile'}>Me</Link></Menu.Item>
                    </Menu>
                </Col>
                {isAuthenticated
                    ? <> <Col span={1}>
                        <Avatar alt={login || ''} style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>}/>
                    </Col>
                        <Col span={3}>
                            <Button onClick={logOutside}
                                    htmlType={'submit'}
                                    type={'primary'}>Sign out
                            </Button>
                        </Col>
                    </>
                    : <Col span={4}>
                        <Button htmlType={'submit'}
                                type={'primary'}>
                            <Link to={'/login'}>Sign in</Link>
                        </Button>
                    </Col>}
            </Row>
        </Header>
    )
}
