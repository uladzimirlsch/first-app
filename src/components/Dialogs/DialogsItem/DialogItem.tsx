import React, {FC} from "react";
import styles from "../Dialogs.module.scss";
import {NavLink} from "react-router-dom";
import {DialogsType} from "../../../types/types";

type  PropsType = {
    dialog: DialogsType
}

export const DialogItem: FC<PropsType> = ({dialog}) => {
    return (
        <div className={styles.dialog}>
            <NavLink to={`/dialogs/${dialog.id}`} activeClassName={styles.activeLink}>{dialog.name}</NavLink>
        </div>
    )
}
