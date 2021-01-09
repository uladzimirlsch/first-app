import one from "./Dialogs.module.css"
import DialogItem from "./DialogsItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/dialogsPageReducer";


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage

    let dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = state.messages.map((m) => <MessageItem message={m.message}/>)
    let newMessageBody = state.newMessageBody

    let onNewMessageChange = (event) => {
        let newBody = event.target.value
        props.store.dispatch(updateNewMessageCreator(newBody))
    }

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    return (
        <div className={one.dialogs}>
            <div className={one.dialogs_item}>
                {dialogsElements}
            </div>
            <div className={one.messages}>
                <div>
                    <div>{messageElements}</div>
                    <div>
                    <textarea value={newMessageBody}
                              onChange={onNewMessageChange}
                              placeholder={'Add message'}>
                    </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Dialogs;