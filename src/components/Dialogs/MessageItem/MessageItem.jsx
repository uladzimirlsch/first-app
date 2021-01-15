import one from "./MessageItem.module.css";

const MessageItem = (props) => {
    return (
        <div>
            <div className={one.message}>
                {props.message}
            </div>
        </div>
    )
};
export default MessageItem;