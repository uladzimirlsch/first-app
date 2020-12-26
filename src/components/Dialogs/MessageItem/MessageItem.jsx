import React from "react";
import one from "./MessageItem.module.css";

const MessageItem = (props) => {

    let getNewMessage = React.createRef()

    let addClickMessage = () => {
        let text = getNewMessage.current.value
        return (
            alert(text))
    }
    return (
        <div>
            <div className={one.message}>
                {props.message}
            </div>
            <textarea ref={getNewMessage}>
        </textarea>
            <div>
                <button onClick={addClickMessage}>Add message</button>
            </div>
        </div>
    )
};
export default MessageItem;