import styles from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom"
import {FC} from "react";
import {DialogsType} from "../../../types/types";

type  PropsType = {
    dialog: DialogsType
}

const DialogItem: FC<PropsType> = ({dialog}) => {
    return (
        <div className={styles.dialog}>
            <NavLink to={`/dialogs/${dialog.id}`} activeClassName={styles.activeLink}>{dialog.name}</NavLink>
        </div>
    )
}

export default DialogItem