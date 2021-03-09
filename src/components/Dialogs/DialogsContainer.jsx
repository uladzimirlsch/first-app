import {addMessage,} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => ({
    dialogs: state.messages.dialogs,
    messages: state.messages.messages,
})

export default compose(
    connect(mapStateToProps, {addMessage}),
    withAuthRedirect
)(Dialogs)

