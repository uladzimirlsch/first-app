import styles from "./Dialogs.module.css"
import DialogItem from "./DialogsItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import React, {FC} from "react";
import MessageForm from "./MessageForm";
import {useDispatch, useSelector} from "react-redux";
import {getDialogs, getMessages} from "../../redux/dialogs-selectors";

export const Dialogs: FC = () => {

    const dialogs = useSelector(getDialogs)
    const messages = useSelector(getMessages)
    const dispatch = useDispatch()

    const addMessage = (newMessage: string | null) => {
        dispatch({type: 'ADD_MESSAGE', newMessage})
    }

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
                    <MessageForm onSubmitMessage={addNewMessage}/>
                </div>
                {messages.map(m => <MessageItem key={m.id} message={m}/>)}
            </div>
        </div>
    )
}
