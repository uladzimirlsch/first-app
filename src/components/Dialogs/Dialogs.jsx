import styles from "./Dialogs.module.css"
import DialogItem from "./DialogsItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {
	let dialogsElements = props.dialogsPage.dialogs.map((d) => (<DialogItem id={d.id} name={d.name} key={d.id}/>))
	let messageElements = props.dialogsPage.messages.map((m) => (<MessageItem message={m.message} key={m.id}/>))

	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogs_item}>
				{dialogsElements}
			</div>
			<div className={styles.messages_item}>
				{messageElements}
				<div>
					<textarea value={props.dialogsPage.newMessageBody}
							  onChange={(event) => {
								  props.updateNewMessageBody(event.target.value)
							  }}
							  placeholder={'Add message'}/>
				</div>
				<div>
					<button onClick={() => {
						props.addMessage()
					}}>Send
					</button>
				</div>
			</div>
		</div>
	)
}
export default Dialogs;