import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsPageReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage

    let onNewMessageChange = (newBody) => {
        props.store.dispatch(updateNewMessageBodyCreator(newBody))
    }
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    return (
       <Dialogs updateNewMessageBody={onNewMessageChange}
                sendMessage={onSendMessageClick}
                dialogsPage={state} />
    )
}
export default DialogsContainer;