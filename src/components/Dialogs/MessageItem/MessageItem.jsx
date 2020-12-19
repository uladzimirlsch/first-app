import one from "./MessageItem.module.css";

const MessageItem = (props) => {
    return (
        <div className={one.message}>
            {props.message}
        </div>
    )
};
export default MessageItem;