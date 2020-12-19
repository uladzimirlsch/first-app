import one from "./Dialogs.module.css"
import DialogItem from "./DialogsItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";


const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'Сергей'},
        {id: 2, name: 'Александр'},
        {id: 3, name: 'Наталья'},
        {id: 4, name: 'Андрей'},
        {id: 5, name: 'Татьяна'}
    ];

    let messages = [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Have a nice day.'},
        {id: 4, message: 'I miss you..'},
        {id: 5, message: 'Happy New Year!'}
    ];

    let dialogsElements = dialogs
        .map((d) => <DialogItem name={d.name} id={d.id}/>);

    let messageElements = messages
        .map((m) => <MessageItem message={m.message}/>);

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