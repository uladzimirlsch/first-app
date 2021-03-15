import styles from "./../Dialogs.module.css";
import React, {FC} from "react";
import {MessagesType} from "../../../types/types";

type  PropsType = {
    message: MessagesType
}

const MessageItem: FC<PropsType> = ({message}) => {
    return (
        <div>
            <div className={styles.message}>
                {message.message}
            </div>
        </div>
    )
};

export default MessageItem;