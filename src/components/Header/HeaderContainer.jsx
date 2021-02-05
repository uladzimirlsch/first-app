import React from "react";
import Header from "./Header";
import * as axios from "axios";
import {setUserData} from "../../redux/AuthenticReducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(r => {
            if (r.data.resultCode === 0) {
                let {id, email, login} = r.data.data
                this.props.setUserData(id, email, login)
            }
            }
        )
    }
    render(){
        return <Header{...this.props}/>
        }
}
let mapStateToProps = (state) => ({
    isAuthenticated: state.authentication.isAuthenticated,
    login: state.authentication.login,
    // id: state.authentication.id,
    // email: state.authentication.email,
})

export default connect(mapStateToProps, {setUserData}) (HeaderContainer)