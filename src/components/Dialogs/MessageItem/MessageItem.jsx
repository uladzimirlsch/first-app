import React from "react";
import one from "./MessageItem.module.css";
import {sendMessageCreator, updateNewMessageCreator} from "../../../redux/store";

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