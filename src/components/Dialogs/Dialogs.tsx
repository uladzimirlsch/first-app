import styles from "./Dialogs.module.css"
import DialogItem from "./DialogsItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import React, {FC} from "react";
import MessageForm from "./MessageForm";
import {DialogsType, MessagesType} from "../../types/types";

type  PropsType = {
    dialogs: DialogsType []
    messages: MessagesType []
    addMessage: (newMessage: string | null) => void
}

const Dialogs: FC<PropsType> = ({dialogs, messages, addMessage}) => {

    const addNewMessage = (value: { newMessage: string | null }) => {
        addMessage(value.newMessage)
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_item}>
                {dialogs.map(d => <DialogItem key={d.id} dialog={d}/>)}
            </div>
            <div className={styles.messages_item}>
                <div>
                    <MessageForm onSubmit={addNewMessage}/>
                </div>
                {messages.map(m => <MessageItem key={m.id} message={m}/>)}
            </div>
        </div>
    )
}

export default Dialogs;