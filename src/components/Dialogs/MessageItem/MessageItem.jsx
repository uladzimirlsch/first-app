import styles from "./../Dialogs.module.css";
import React from "react";

const MessageItem = (props) => {
    return (
        <div>
            <div className={styles.message}>
                {props.message}
            </div>
        </div>
    )
};

export default MessageItem;