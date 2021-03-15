import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {actions} from "../../redux/dialogs-reducer";
import {RootState} from "../../redux/redux-store";
import {DialogsType, MessagesType} from "../../types/types";
import {ComponentType} from "react";

type StateProps = {
    dialogs: DialogsType []
    messages: MessagesType []
}
type DispatchProps = {
    addMessage: (newMessage: string | null) => void
}
type  OwnProps = {}

const mapStateToProps = (state: RootState): StateProps => ({
    dialogs: state.messages.dialogs,
    messages: state.messages.messages,
})

export default compose<ComponentType>(
    connect<StateProps, DispatchProps, OwnProps, RootState>(mapStateToProps, {addMessage: actions.addMessage}),
    withAuthRedirect
)(Dialogs)

