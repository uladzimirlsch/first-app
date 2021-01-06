import one from "./Dialogs.module.css"
import DialogItem from "./DialogsItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";


const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>);

    let messageElements = props.dialogsPage.messages.map((m) => <MessageItem message={m.message}/>);

    return (
        <div className={one.dialogs}>
            <div className={one.dialogs_item}>
                {dialogsElements}
            </div>
            <div className={one.messages}>
                {messageElements}
            </div>
        </div>
    )
};
export default Dialogs;