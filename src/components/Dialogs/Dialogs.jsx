import styles from "./Dialogs.module.css"
import DialogItem from "./DialogsItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import TextArea from "../Login/TextArea";

const Dialogs = (props) => {
	let dialogsElements = props.dialogsPage.dialogs.map((d) => (<DialogItem id={d.id} name={d.name} key={d.id}/>))
	let messageElements = props.dialogsPage.messages.map((m) => (<MessageItem message={m.message} key={m.id}/>))

	const updateNewMessageBody = (event) => {
		props.updateNewMessageBody(event.target.value)
	}

	const addMessage = () => {
		props.addMessage()}

	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogs_item}>
				{dialogsElements}
			</div>
			<div className={styles.messages_item}>
				{messageElements}
				<div>
					{/*<TextArea/>*/}
					<textarea value={props.dialogsPage.newMessageBody}
							  onChange={updateNewMessageBody}
							  placeholder={'Add message'}/>
				</div>
				<div>
					<button onClick={addMessage}>Send
					</button>
				</div>
			</div>
		</div>
	)
}
export default Dialogs;