import one from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={one.dialog + ' ' + one.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}
const MessageItem = (props) => {
    return (
        <div className={one.message}>
            {props.message}
        </div>
    )
}


const Dialogs = (props) => {
    return (
        <div className={one.dialogs}>
            <div className={one.dialogs_item}>
                <DialogItem name={'Сергей'} id={'1'}/>
                <DialogItem name={'Александр'} id={'2'}/>
                <DialogItem name={'Наталья'} id={'3'}/>
                <DialogItem name={'Андрей'} id={'4'}/>
                <DialogItem name={'Татьяна'} id={'5'}/>
            </div>
            <div className={one.messages}>
                <MessageItem message={'Hello.'}/>
                <MessageItem message={'How are you?'}/>
                <MessageItem message={'Have a nice day.'}/>
            </div>
        </div>
    )
};
export default Dialogs;