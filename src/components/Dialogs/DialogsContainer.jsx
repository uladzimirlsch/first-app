import {addMessageAC, updateNewMessageBodyAC,} from "../../redux/DialogsPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage
})
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageAC())
        },
        updateNewMessageBody: (newBody) => {
            dispatch(updateNewMessageBodyAC(newBody))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dialogs)

