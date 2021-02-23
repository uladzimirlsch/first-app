import styles from "./Dialogs.module.css"
import DialogItem from "./DialogsItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import React from "react";
import ReduxTextAreaForm from "./NewTextArea";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map((d) => (
    	<DialogItem id={d.id} name={d.name} key={d.id}/>))

    let messageElements = props.dialogsPage.messages.map((m) => (
        <MessageItem id={m.id} message={m.message} key={m.id}/>))

    const addMessage = (values) => {
        props.addMessage(values.newMessage)
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_item}>
                {dialogsElements}
            </div>
            <div className={styles.messages_item}>
                {messageElements}
                <div>
                    <ReduxTextAreaForm onSubmit={addMessage}/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;