import one from "./Dialogs.module.css"
import DialogItem from "./DialogsItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map((d) => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    let messageElements = props.dialogsPage.messages.map((m) => <MessageItem message={m.message} key={m.id}/>)
    let newMessageBody = props.dialogsPage.newMessageBody

    let onNewMessageChange = (event) => {
        props.updateNewMessageBody(event.target.value)
    }
    let onSendMessageClick = () => {
        props.addMessage()
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