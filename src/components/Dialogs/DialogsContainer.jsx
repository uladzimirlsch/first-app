import {addMessageAC, updateNewMessageBodyAC,} from "../../redux/DialogsPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	}
}
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
const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;