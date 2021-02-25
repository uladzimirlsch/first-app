import styles from "./ProfileInfo.module.css";
import * as React from "react";

class ProfileStatus extends React.Component {

    // if (!props.profile) {
    //     return <Preloader />
    // }

    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            status: this.props.status,
        }
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }

    onActivatedChange = (e) => {
        this.setState({
            status: e.target.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <>
                {!this.state.editMode
                    ? <div className={styles.profileStatus}>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || 'No status'}</span>
                      </div>
                    : <div>
                        <input onChange={this.onActivatedChange}
                               autoFocus={true}
                               onBlur={this.deactivateEditMode}
                               value={this.state.status}/>
                      </div>
                }
            </>
        )
    }

}

export default ProfileStatus;