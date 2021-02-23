import {addMessage,} from "../../redux/DialogsPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage,
})

export default compose(
    connect(mapStateToProps, {addMessage}),
    withAuthRedirect
)(Dialogs)

